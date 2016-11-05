import { AsyncStorage } from 'react-native';

const ON_TITLE_CHANGE = 'ON_TITLE_CHANGE';
const ON_DESCRIPTION_CHANGE = 'ON_DESCRIPTION_CHANGE';
const ON_SAVE_PRESS = 'ON_SAVE_PRESS';

const formItems = AsyncStorage.getItem('formItems');

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
    case ON_SAVE_PRESS: {
      let newForm = {
        ...state,
        id: new Date().getTime()
      };
      AsyncStorage.setItem(`formItems`, formItems.then((err, forms) => {
        forms.map((form) => {
          if (form.id !== newForm.id) return form;
          return newForm;
        })
      })).done();
      return newForm;
    }
    default: return state;
  }
};
