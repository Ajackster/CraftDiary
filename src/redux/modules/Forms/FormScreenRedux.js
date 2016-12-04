import { db } from '../../../database/SQLite';
import { loadFormItems } from '../HomeScreenList/HomeScreenListRedux';

const ON_TITLE_CHANGE = 'ON_TITLE_CHANGE';
const ON_DESCRIPTION_CHANGE = 'ON_DESCRIPTION_CHANGE';
const LOAD_FORM_SCREEN = 'LOAD_FORM_SCREEN';
const ON_CREATE_SAVE_PRESS = 'ON_CREATE_SAVE_PRESS';
const ON_EDIT_SAVE_PRESS = 'ON_EDIT_SAVE_PRESS';
const ON_ADD_IMAGE = 'ON_ADD_IMAGE';

export const addFormItem = (title, description, images) => {
  let utc = new Date().toJSON().slice(0, 10);
  const insertQuery = `INSERT INTO form_items (title, description, created) VALUES ("${title}", "${description}", "${utc}");`;
  const getIdQuery = `SELECT id FROM form_items WHERE created = "${utc}";`;
  db.executeSql(insertQuery, [], () => {
    db.executeSql(getIdQuery, [], (res) => {
      let itemId = res.rows.item(0).id;
      console.log(itemId);
      for (var i = 0; i < images.length; i++) {
        db.executeSql(`INSERT INTO form_item_images (formId, source) VALUES ("${itemId}", "${images[i]}");`)
      }
      loadFormItems();
    })
  });
};

export const updateFormItem = (title, description, id, images) => {
  const updateQuery = `UPDATE form_items SET title='${title}', description='${description}' WHERE id='${id}'`;
  db.executeSql(updateQuery, [], () => {
    db.executeSql(`SELECT * FROM form_item_images WHERE formId = ${id};`, [], (res) => {
      for (var i = 0; i < images.length; i++) {
        if (images[i] !== res.rows.item(i)) {
          db.executeSql(`UPDATE form_item_images SET source = ${images[i]} WHERE id = ${res.rows.item(i).id}`)
        }
      }
      loadFormItems();
    });
  });
};

export const loadFormScreen = (dispatch, id) => {
  db.executeSql(`SELECT * FROM form_items WHERE id = ${id}`, [], (res) => {
    const item = res.rows.item(0);
    return dispatch({ type: LOAD_FORM_SCREEN, item: item })
  })
};

export const onTitleChange = (title) => {
  return {
    type: ON_TITLE_CHANGE,
    title: title
  }
};

export const onDescriptionChange = (description) => {
  return {
    type: ON_DESCRIPTION_CHANGE,
    description: description
  }
};

export const onAddImage = (image) => {
  return {
    type: ON_ADD_IMAGE,
    image: image
  }
};

export const onCreateSavePress = () => {
  return {
    type: ON_CREATE_SAVE_PRESS
  }
};

export const onEditSavePress = () => {
  return {
    type: ON_EDIT_SAVE_PRESS
  }
};

const DEFAULT_STATE = {
  title: '',
  description: '',
  images: []
};

export const FormScreen = (state = DEFAULT_STATE, action) => {
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
    case ON_ADD_IMAGE: {
      return {
        ...state,
        images: [
          ...state.images,
          action.image
        ]
      }
    }
    case LOAD_FORM_SCREEN: {
      return {
        id: action.item.id,
        title: action.item.title,
        description: action.item.description,
        images: action.item.images
      }
    }
    case ON_CREATE_SAVE_PRESS: {
      addFormItem(state.title, state.description, state.images);
      return DEFAULT_STATE;
    }
    case ON_EDIT_SAVE_PRESS: {
      updateFormItem(state.title, state.description, state.id, state.images);
      return DEFAULT_STATE;
    }
    default: return state;
  }
};
