import api from 'src/components/api';

export const SKILLS_REFRESH_REQUEST = 'SKILLS_REFRESH_REQUEST';
export const SKILLS_REFRESH_SUCCESS = 'SKILLS_REFRESH_SUCCESS';
export const SKILLS_REFRESH_FAIL    = 'SKILLS_REFRESH_FAIL';

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
        type: SKILLS_REFRESH_REQUEST,
    };
}

export function refreshSkillsSuccess(skillList) {
    return {
        type: SKILLS_REFRESH_SUCCESS,
        skillList,
    };
}

export function refreshSkillsFail(error) {
    return {
        type: SKILLS_REFRESH_FAIL,
        error,
    };
}
