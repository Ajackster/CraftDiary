import { db } from '../../../database/SQLite';
import { loadFormItems } from '../HomeScreenList/HomeScreenList';

const ON_TITLE_CHANGE = 'ON_TITLE_CHANGE';
const ON_DESCRIPTION_CHANGE = 'ON_DESCRIPTION_CHANGE';
const ON_FORM_SCREEN_LOAD = 'ON_FORM_SCREEN_LOAD';
const ON_SAVE_PRESS = 'ON_SAVE_PRESS';

export const addFormItem = (title, description) => {
  const insertQuery = `INSERT INTO form_items (title, description) VALUES ("${title}", "${description}");`;
  db.executeSql(insertQuery, [], () => loadFormItems());
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

export const onSavePress = () => {
  return {
    type: 'ON_SAVE_PRESS'
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
    case ON_FORM_SCREEN_LOAD: {
      return {
        title: action.title,
        description: action.description
      }
    }
    case ON_SAVE_PRESS: {
      addFormItem(state.title, state.description);
      return {};
    }
    default: return state;
  }
};
