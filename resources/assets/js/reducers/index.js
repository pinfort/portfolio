import { combineReducers } from 'redux-immutable';
import message from './message';
import licenses from './licenses';

const reducers = {
    message,
    licenses,
};

export default combineReducers(reducers);
