const LOAD_FORM_ITEMS = 'LOAD_FORM_ITEMS';

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
