import api from 'src/components/api';

export const ADMIN_SKILLS_REFRESH_REQUEST = 'ADMIN_SKILLS_REFRESH_REQUEST';
export const ADMIN_SKILLS_REFRESH_SUCCESS = 'ADMIN_SKILLS_REFRESH_SUCCESS';
export const ADMIN_SKILLS_REFRESH_FAIL    = 'ADMIN_SKILLS_REFRESH_FAIL';

export function refreshSkills() {
    return (dispatch, getState) => {
        dispatch(refreshSkillsRequest());

        api(getState).get(
            '/api/skills',
        ).then(response => {
            dispatch(refreshSkillsSuccess(response.data));
        }).catch(error => {
            dispatch(refreshSkillsFail(error));
        });
    };
}

export function refreshSkillsRequest() {
    return {
        type: ADMIN_SKILLS_REFRESH_REQUEST,
    };
}

export function refreshSkillsSuccess(skillList) {
    return {
        type: ADMIN_SKILLS_REFRESH_SUCCESS,
        skillList,
    };
}

export function refreshSkillsFail(error) {
    return {
        type: ADMIN_SKILLS_REFRESH_FAIL,
        error,
    };
}

export const ADMIN_SKILL_DELETE_REQUEST = 'ADMIN_SKILL_DELETE_REQUEST';
export const ADMIN_SKILL_DELETE_SUCCESS = 'ADMIN_SKILL_DELETE_SUCCESS';
export const ADMIN_SKILL_DELETE_FAIL    = 'ADMIN_SKILL_DELETE_FAIL';

export function deleteSkill(id) {
    return (dispatch, getState) => {
        dispatch(deleteSkillRequest());

        api(getState).delete(
            '/api/skills/' + id,
        ).then(response => {
            dispatch(deleteSkillSuccess(response.data.data.id));
        }).catch(error => {
            dispatch(deleteSkillFail(error));
        });
    };
}

export function deleteSkillRequest() {
    return {
        type: ADMIN_SKILL_DELETE_REQUEST,
    };
}

export function deleteSkillSuccess(deletedSkillId) {
    return {
        type: ADMIN_SKILL_DELETE_SUCCESS,
        deletedSkillId,
    };
}

export function deleteSkillFail(error) {
    return {
        type: ADMIN_SKILL_DELETE_FAIL,
        error,
    };
}

export const ADMIN_SKILL_ADD_REQUEST = 'ADMIN_SKILL_ADD_REQUEST';
export const ADMIN_SKILL_ADD_SUCCESS = 'ADMIN_SKILL_ADD_SUCCESS';
export const ADMIN_SKILL_ADD_FAIL    = 'ADMIN_SKILL_ADD_FAIL';

export function addSkill(data) {
    return (dispatch, getState) => {
        dispatch(addSkillRequest());

        let params = new URLSearchParams();

        for(let k of Object.keys(data)) {
            params.append(k, data[k]);
        }

        api(getState).post(
            '/api/skills/',
            params,
        ).then(response => {
            dispatch(addSkillSuccess(response.data.data.skill));
        }).catch(error => {
            dispatch(addSkillFail(error));
        });
    };
}

export function addSkillRequest() {
    return {
        type: ADMIN_SKILL_ADD_REQUEST,
    };
}

export function addSkillSuccess(addedSkill) {
    return {
        type: ADMIN_SKILL_ADD_SUCCESS,
        addedSkill,
    };
}

export function addSkillFail(error) {
    return {
        type: ADMIN_SKILL_ADD_FAIL,
        error,
    };
}
