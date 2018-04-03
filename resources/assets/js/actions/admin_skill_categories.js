import api from 'src/components/api';

export const ADMIN_SKILL_CATEGORIES_REFRESH_REQUEST = 'ADMIN_SKILL_CATEGORIES_REFRESH_REQUEST';
export const ADMIN_SKILL_CATEGORIES_REFRESH_SUCCESS = 'ADMIN_SKILL_CATEGORIES_REFRESH_SUCCESS';
export const ADMIN_SKILL_CATEGORIES_REFRESH_FAIL    = 'ADMIN_SKILL_CATEGORIES_REFRESH_FAIL';

export function refreshSkillCategories() {
    return (dispatch, getState) => {
        dispatch(refreshSkillCategoriesRequest());

        api(getState).get(
            '/api/skills/categories',
        ).then(response => {
            dispatch(refreshSkillCategoriesSuccess(response.data));
        }).catch(error => {
            dispatch(refreshSkillCategoriesFail(error));
        });
    };
}

export function refreshSkillCategoriesRequest() {
    return {
        type: ADMIN_SKILL_CATEGORIES_REFRESH_REQUEST,
    };
}

export function refreshSkillCategoriesSuccess(skillCategoryList) {
    return {
        type: ADMIN_SKILL_CATEGORIES_REFRESH_SUCCESS,
        skillCategoryList,
    };
}

export function refreshSkillCategoriesFail(error) {
    return {
        type: ADMIN_SKILL_CATEGORIES_REFRESH_FAIL,
        error,
    };
}

export const ADMIN_SKILL_CATEGORY_DELETE_REQUEST = 'ADMIN_SKILL_CATEGORY_DELETE_REQUEST';
export const ADMIN_SKILL_CATEGORY_DELETE_SUCCESS = 'ADMIN_SKILL_CATEGORY_DELETE_SUCCESS';
export const ADMIN_SKILL_CATEGORY_DELETE_FAIL    = 'ADMIN_SKILL_CATEGORY_DELETE_FAIL';

export function deleteSkillCategory(id) {
    return (dispatch, getState) => {
        dispatch(deleteSkillCategoryRequest());

        api(getState).delete(
            '/api/skills/categories/' + id,
        ).then(response => {
            dispatch(deleteSkillCategorySuccess(response.data.data.id));
        }).catch(error => {
            dispatch(deleteSkillCategoryFail(error));
        });
    };
}

export function deleteSkillCategoryRequest() {
    return {
        type: ADMIN_SKILL_CATEGORY_DELETE_REQUEST,
    };
}

export function deleteSkillCategorySuccess(deletedSkillCategoryId) {
    return {
        type: ADMIN_SKILL_CATEGORY_DELETE_SUCCESS,
        deletedSkillCategoryId,
    };
}

export function deleteSkillCategoryFail(error) {
    return {
        type: ADMIN_SKILL_CATEGORY_DELETE_FAIL,
        error,
    };
}

export const ADMIN_SKILL_CATEGORY_ADD_REQUEST = 'ADMIN_SKILL_CATEGORY_ADD_REQUEST';
export const ADMIN_SKILL_CATEGORY_ADD_SUCCESS = 'ADMIN_SKILL_CATEGORY_ADD_SUCCESS';
export const ADMIN_SKILL_CATEGORY_ADD_FAIL    = 'ADMIN_SKILL_CATEGORY_ADD_FAIL';

export function addSkillCategory(data) {
    return (dispatch, getState) => {
        dispatch(addSkillCategoryRequest());

        let params = new URLSearchParams();

        for(let k of Object.keys(data)) {
            params.append(k, data[k]);
        }

        api(getState).post(
            '/api/skills/categories',
            params,
        ).then(response => {
            dispatch(addSkillCategorySuccess(response.data.data.skill_category));
        }).catch(error => {
            dispatch(addSkillCategoryFail(error));
        });
    };
}

export function addSkillCategoryRequest() {
    return {
        type: ADMIN_SKILL_CATEGORY_ADD_REQUEST,
    };
}

export function addSkillCategorySuccess(addedSkillCategory) {
    return {
        type: ADMIN_SKILL_CATEGORY_ADD_SUCCESS,
        addedSkillCategory,
    };
}

export function addSkillCategoryFail(error) {
    return {
        type: ADMIN_SKILL_CATEGORY_ADD_FAIL,
        error,
    };
}
