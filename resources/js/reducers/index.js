import { combineReducers } from 'redux-immutable';
import message from './message';
import licenses from './licenses';
import skills from './skills';
import admin_licenses from './admin_licenses';
import admin_skills from './admin_skills';
import admin_skill_categories from './admin_skill_categories';
import works from './works';
import admin_works from './admin_works';
import admin_services from './admin_services';
import admin_accounts from './admin_accounts';
import accounts from './accounts';
import work_detail from './work_detail';
import tag_detail from './tag_detail';
import introduction from './introduction';
import admin_introduction from './admin_introduction';

const reducers = {
    message,
    licenses,
    skills,
    admin_licenses,
    admin_skills,
    admin_skill_categories,
    works,
    admin_works,
    admin_services,
    admin_accounts,
    accounts,
    work_detail,
    tag_detail,
    introduction,
    admin_introduction,
};

export default combineReducers(reducers);
