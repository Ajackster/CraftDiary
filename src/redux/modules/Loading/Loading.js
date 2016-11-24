const LOADING = 'LOADING';
const NOT_LOADING = 'NOT_LOADING';

export const Loading = (state = true, action) => {
  switch(action.type) {
    case LOADING: {
      return true;
    }
    case NOT_LOADING: {
      return false;
    }
    default: return state;
  }
};
