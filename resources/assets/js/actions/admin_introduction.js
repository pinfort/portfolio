import api from 'src/components/api';

export const ADMIN_INTRODUCTION_REFRESH_REQUEST = 'ADMIN_INTRODUCTION_REFRESH_REQUEST';
export const ADMIN_INTRODUCTION_REFRESH_SUCCESS = 'ADMIN_INTRODUCTION_REFRESH_SUCCESS';
export const ADMIN_INTRODUCTION_REFRESH_FAIL    = 'ADMIN_INTRODUCTION_REFRESH_FAIL';

export function refreshIntroduction() {
    return (dispatch, getState) => {
        dispatch(refreshIntroductionRequest());

        api(getState).get(
            '/api/user/introduction',
        ).then(response => {
            dispatch(refreshIntroductionSuccess(response.data.data.user_introduction));
        }).catch(error => {
            dispatch(refreshIntroductionFail(error));
        });
    };
}

export function refreshIntroductionRequest() {
    return {
        type: ADMIN_INTRODUCTION_REFRESH_REQUEST,
    };
}

export function refreshIntroductionSuccess(introduction) {
    return {
        type: ADMIN_INTRODUCTION_REFRESH_SUCCESS,
        introduction,
    };
}

export function refreshIntroductionFail(error) {
    return {
        type: ADMIN_INTRODUCTION_REFRESH_FAIL,
        error,
    };
}

export const ADMIN_INTRODUCTION_UPDATE_REQUEST = 'ADMIN_INTRODUCTION_UPDATE_REQUEST';
export const ADMIN_INTRODUCTION_UPDATE_SUCCESS = 'ADMIN_INTRODUCTION_UPDATE_SUCCESS';
export const ADMIN_INTRODUCTION_UPDATE_FAIL    = 'ADMIN_INTRODUCTION_UPDATE_FAIL';

export function updateIntroduction(data) {
    return (dispatch, getState) => {
        dispatch(updateIntroductionRequest());

        let params = new URLSearchParams();

        for(let k of Object.keys(data)) {
            params.append(k, data[k]);
        }

        api(getState).patch(
            '/api/user/introduction/',
            params,
        ).then(response => {
            dispatch(updateIntroductionSuccess(response.data.data.user.introduction));
        }).catch(error => {
            dispatch(updateIntroductionFail(error));
        });
    };
}

export function updateIntroductionRequest() {
    return {
        type: ADMIN_INTRODUCTION_UPDATE_REQUEST,
    };
}

export function updateIntroductionSuccess(introduction) {
    return {
        type: ADMIN_INTRODUCTION_UPDATE_SUCCESS,
        introduction,
    };
}

export function updateIntroductionFail(error) {
    return {
        type: ADMIN_INTRODUCTION_UPDATE_FAIL,
        error,
    };
}
