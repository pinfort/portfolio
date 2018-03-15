import {
    ADMIN_SKILL_CATEGORIES_REFRESH_REQUEST,
    ADMIN_SKILL_CATEGORIES_REFRESH_SUCCESS,
    ADMIN_SKILL_CATEGORIES_REFRESH_FAIL,
} from 'src/actions/admin_skill_categories';
import { Map, fromJS } from 'immutable';

function normalizeSkillCategories(state, skillCategoryList) {
    return state.set('skill_category', fromJS(skillCategoryList));
}

const initialState = Map({
    skill_category: null,
});

export default function admin_skills(state = initialState, action) {
    switch (action.type) {
    case ADMIN_SKILL_CATEGORIES_REFRESH_SUCCESS:
        return normalizeSkillCategories(state, action.skillCategoryList);
    case ADMIN_SKILL_CATEGORIES_REFRESH_REQUEST:
    case ADMIN_SKILL_CATEGORIES_REFRESH_FAIL:
    default:
        return state;
    }
}
