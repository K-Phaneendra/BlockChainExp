import { combineReducers } from 'redux';
import testReducer from './testReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
  testReducer,
  loadingReducer
});
