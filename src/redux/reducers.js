import { combineReducers } from 'redux';
import { FormScreen } from './modules/Forms/FormScreenRedux';
import { HomeScreenList } from './modules/HomeScreenList/HomeScreenList';

const reducers = combineReducers ({
  formScreen: FormScreen,
  homeScreenList: HomeScreenList
});

export default reducers;
