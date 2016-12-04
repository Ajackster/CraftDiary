import { db } from '../../../database/SQLite';

const LOAD_FORM_ITEMS = 'LOAD_FORM_ITEMS';

export const loadFormItems = (dispatch) => {
  var formItems = [];
  dispatch({ type: 'LOADING' });
  db.executeSql('SELECT * FROM form_items ORDER BY created DESC', [], (res) => {
    db.executeSql('SELECT * FROM form_item_images', [], (imgResponse) => {
      for (var i = 0; i < res.rows.length; i++) {
        let img = [];
        for (var j = 0; i < imgResponse.rows.length; j++) {
          if (imgResponse.rows.item(i).formId === res.rows.item(i).id) {
            img = [...img, imgResponse.rows.item(i)]
          }
        }
        formItems.push({ ...res.rows.item(i), images: img });
      }
      dispatch({ type: 'NOT_LOADING' });
      return dispatch({ type: 'LOAD_FORM_ITEMS', formItems: formItems })
    });
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
