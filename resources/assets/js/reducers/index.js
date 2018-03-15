import { combineReducers } from 'redux-immutable';
import message from './message';
import licenses from './licenses';
import skills from './skills';
import admin_licenses from './admin_licenses';
import admin_skills from './admin_skills';
import admin_skill_categories from './admin_skill_categories';

const reducers = {
    message,
    licenses,
    skills,
    admin_licenses,
    admin_skills,
    admin_skill_categories,
};

export default combineReducers(reducers);
