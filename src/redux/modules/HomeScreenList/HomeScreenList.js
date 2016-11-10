import { db } from '../../../database/SQLite';

const LOAD_FORM_ITEMS = 'LOAD_FORM_ITEMS';

export const loadFormItems = (dispatch) => {
  var formItems = [];
  db.executeSql('SELECT * FROM form_items;', [], (res) => {
    for (var i = 0; i < res.rows.length; i++) {
      formItems.push(res.rows.item(i));
    }
    return dispatch({ type: 'LOAD_FORM_ITEMS', formItems: formItems })
  });
};

export const HomeScreenList = (state = [], action) => {
  switch(action.type) {
    case LOAD_FORM_ITEMS: {
      return action.formItems;
    }
    default: {
      return state;
    }
  }
};
