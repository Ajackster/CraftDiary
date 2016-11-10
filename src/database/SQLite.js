import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);
SQLite.enablePromise(false);

const DB_NAME = 'CraftDiary.db';
const DB_VERSION = '0.0.1';
const DB_DISPLAY_NAME = 'CraftDiary Database';
const DATABASE_SIZE = 200000;
var db;

let openCallBack = () => {
  console.log('Database OPEN');
};

let errorCallBack = (err) => {
  console.log('error: ' + err);
};

let closeCallBack = () => {
  console.log('Database CLOSED');
};

let populateDatabase = (db) => {
  db.executeSql('CREATE TABLE IF NOT EXISTS form_items (id integer primary key, title text, description text);');
};

export const initDatabase = () => {
  db = SQLite.openDatabase(DB_NAME, DB_VERSION, DB_DISPLAY_NAME, DATABASE_SIZE, openCallBack, errorCallBack);
  populateDatabase(db);
};

export const closeDatabase = () => {
  if (db) {
    console.log('Closing database ...');
    db.close(closeCallBack, errorCallBack)
  } else {
    console.log('Database was not opened');
  }
};

export const addFormItem = (title, description) => {
  db.executeSql(`INSERT INTO form_items (title, description) VALUES ("${title}", "${description}");`, []);
};

export const getFormItems = (dispatch) => {
  var formItems = [];
  db.executeSql('SELECT * FROM form_items;', [], (res) => {
    for (var i = 0; i < res.rows.length; i++) {
      formItems.push(res.rows.item(i));
    }
    return dispatch({ type: 'LOAD_FORM_ITEMS', formItems: formItems })
  });
};
