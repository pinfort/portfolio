import { combineReducers } from 'redux-immutable';
import message from './message';
import licenses from './licenses';
import skills from './skills';

const reducers = {
    message,
    licenses,
    skills,
};

export default combineReducers(reducers);
