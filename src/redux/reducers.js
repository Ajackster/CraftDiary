import { combineReducers } from 'redux';
import { FormScreen } from './modules/Forms/FormScreenRedux';

const reducers = combineReducers ({
  formScreen: FormScreen
});

export default reducers;
