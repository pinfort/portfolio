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
