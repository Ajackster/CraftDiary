const LOAD_FORM_ITEMS = 'LOAD_FORM_ITEMS';

export const loadFormItems = () => {
  return {
    type: LOAD_FORM_ITEMS
  }
};

export const HomeScreenList = (state = [], action) => {
  switch(action.type) {
    case LOAD_FORM_ITEMS: {
      return state;
    }
    default: {
      return state;
    }
  }
}
