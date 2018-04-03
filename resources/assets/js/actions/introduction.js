import api from 'src/components/api';

export const INTRODUCTION_REFRESH_REQUEST = 'INTRODUCTION_REFRESH_REQUEST';
export const INTRODUCTION_REFRESH_SUCCESS = 'INTRODUCTION_REFRESH_SUCCESS';
export const INTRODUCTION_REFRESH_FAIL    = 'INTRODUCTION_REFRESH_FAIL';

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
        type: INTRODUCTION_REFRESH_REQUEST,
    };
}

export function refreshIntroductionSuccess(introduction) {
    return {
        type: INTRODUCTION_REFRESH_SUCCESS,
        introduction,
    };
}

export function refreshIntroductionFail(error) {
    return {
        type: INTRODUCTION_REFRESH_FAIL,
        error,
    };
}
