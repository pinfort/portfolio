import {
    ADMIN_SKILL_CATEGORIES_REFRESH_REQUEST,
    ADMIN_SKILL_CATEGORIES_REFRESH_SUCCESS,
    ADMIN_SKILL_CATEGORIES_REFRESH_FAIL,
    ADMIN_SKILL_CATEGORY_DELETE_REQUEST,
    ADMIN_SKILL_CATEGORY_DELETE_SUCCESS,
    ADMIN_SKILL_CATEGORY_DELETE_FAIL,
    ADMIN_SKILL_CATEGORY_ADD_REQUEST,
    ADMIN_SKILL_CATEGORY_ADD_SUCCESS,
    ADMIN_SKILL_CATEGORY_ADD_FAIL,
} from 'src/actions/admin_skill_categories';
import { Map, fromJS } from 'immutable';

function normalizeSkillCategories(state, skillCategoryList) {
    return state.set('skill_category', fromJS(skillCategoryList));
}

function deleteSkillCategory(state, skillCategoryId) {
    let newState = [];
    state.get('skill_category').map((skillCategory) => {

        if (skillCategory.get('id') !== skillCategoryId) {
            newState.push(skillCategory);
        }
    });
    return state.set('skill_category', fromJS(newState));
}

function addSkillCategory(state, skill_category) {
    let newState = state.get('skill_category').toJS();
    newState.push(skill_category);
    return state.set('skill_category', fromJS(newState));
}

const initialState = Map({
    skill_category: null,
});

export default function admin_skills(state = initialState, action) {
    switch (action.type) {
    case ADMIN_SKILL_CATEGORIES_REFRESH_SUCCESS:
        return normalizeSkillCategories(state, action.skillCategoryList);
    case ADMIN_SKILL_CATEGORY_DELETE_SUCCESS:
        return deleteSkillCategory(state, action.deletedSkillCategoryId);
    case ADMIN_SKILL_CATEGORY_ADD_SUCCESS:
        return addSkillCategory(state, action.addedSkillCategory);
    case ADMIN_SKILL_CATEGORY_ADD_REQUEST:
    case ADMIN_SKILL_CATEGORY_ADD_FAIL:
    case ADMIN_SKILL_CATEGORY_DELETE_REQUEST:
    case ADMIN_SKILL_CATEGORY_DELETE_FAIL:
    case ADMIN_SKILL_CATEGORIES_REFRESH_REQUEST:
    case ADMIN_SKILL_CATEGORIES_REFRESH_FAIL:
    default:
        return state;
    }
}
