import { db } from '../../../database/SQLite';
import { loadFormItems } from '../HomeScreenList/HomeScreenList';

const ON_TITLE_CHANGE = 'ON_TITLE_CHANGE';
const ON_DESCRIPTION_CHANGE = 'ON_DESCRIPTION_CHANGE';
const LOAD_FORM_SCREEN = 'LOAD_FORM_SCREEN';
const ON_CREATE_SAVE_PRESS = 'ON_CREATE_SAVE_PRESS';
const ON_EDIT_SAVE_PRESS = 'ON_EDIT_SAVE_PRESS';
const ON_ADD_PHOTO = 'ON_ADD_PHOTO';

export const addFormItem = (title, description) => {
  let utc = new Date().toJSON().slice(0, 10);
  const insertQuery = `INSERT INTO form_items (title, description, created) VALUES ("${title}", "${description}", "${utc}");`;
  db.executeSql(insertQuery, [], () => loadFormItems());
};

export const updateFormItem = (title, description, id) => {
  const updateQuery = `UPDATE form_items SET title='${title}', description='${description}' WHERE id='${id}'`;
  db.executeSql(updateQuery, [], () => loadFormItems());
};

export const loadFormScreen = (dispatch, id) => {
  db.executeSql(`SELECT * FROM form_items WHERE id = ${id}`, [], (res) => {
    const item = res.rows.item(0);
    return dispatch({ type: LOAD_FORM_SCREEN, item: item })
  })
};

export const onTitleChange = (title) => {
  return {
    type: 'ON_TITLE_CHANGE',
    title: title
  }
};

export const onDescriptionChange = (description) => {
  return {
    type: 'ON_DESCRIPTION_CHANGE',
    description: description
  }
};

export const onCreateSavePress = () => {
  return {
    type: 'ON_CREATE_SAVE_PRESS'
  }
};

export const onEditSavePress = () => {
  return {
    type: 'ON_EDIT_SAVE_PRESS'
  }
};

export const FormScreen = (state = {}, action) => {
  switch(action.type) {
    case ON_TITLE_CHANGE: {
      return {
        ...state,
        title: action.title
      }
    }
    case ON_DESCRIPTION_CHANGE: {
      return {
        ...state,
        description: action.description
      }
    }
    case ON_ADD_PHOTO: {
      return {
        ...state,
        photos: action.photos
      }
    }
    case LOAD_FORM_SCREEN: {
      return {
        id: action.item.id,
        title: action.item.title,
        description: action.item.description
      }
    }
    case ON_CREATE_SAVE_PRESS: {
      addFormItem(state.title, state.description);
      return {};
    }
    case ON_EDIT_SAVE_PRESS: {
      updateFormItem(state.title, state.description, state.id);
      return {}
    }
    default: return state;
  }
};
