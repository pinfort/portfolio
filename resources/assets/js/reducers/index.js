import { combineReducers } from 'redux-immutable';
import message from './message';
import licenses from './licenses';
import skills from './skills';
import admin_licenses from './admin_licenses';

const reducers = {
    message,
    licenses,
    skills,
    admin_licenses,
};

export default combineReducers(reducers);
