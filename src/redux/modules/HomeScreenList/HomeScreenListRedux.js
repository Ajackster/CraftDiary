import { db } from '../../../database/SQLite';

const LOAD_FORM_ITEMS = 'LOAD_FORM_ITEMS';

export const loadFormItems = (dispatch) => {
  var formItems = [];
  dispatch({ type: 'LOADING' });
  db.executeSql('SELECT * FROM form_items JOIN form_item_images ON form_items.id = form_item_images.formId ORDER BY created DESC', [], (res) => {
    for (var i = 0; i < res.rows.length; i++) {
      formItems.push(res.rows.item(i));
    }
    console.log(formItems);
    dispatch({ type: 'NOT_LOADING' });
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
