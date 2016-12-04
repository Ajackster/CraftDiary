import { combineReducers } from 'redux';
import { FormScreen } from './modules/Forms/FormScreenRedux';
import { HomeScreenList } from './modules/HomeScreenList/HomeScreenListRedux';
import { Loading } from './modules/Loading/Loading'

const reducers = combineReducers ({
  formScreen: FormScreen,
  homeScreenList: HomeScreenList,
  loading: Loading
});

export default reducers;
