import api from 'src/components/api';

export const WORKS_REFRESH_REQUEST = 'WORKS_REFRESH_REQUEST';
export const WORKS_REFRESH_SUCCESS = 'WORKS_REFRESH_SUCCESS';
export const WORKS_REFRESH_FAIL    = 'WORKS_REFRESH_FAIL';

export function refreshWorks() {
    return (dispatch, getState) => {
        dispatch(refreshWorksRequest());

        api(getState).get(
            '/api/works',
        ).then(response => {
            dispatch(refreshWorksSuccess(response.data));
        }).catch(error => {
            dispatch(refreshWorksFail(error));
        });
    };
}

export function refreshWorksRequest() {
    return {
        type: WORKS_REFRESH_REQUEST,
    };
}

export function refreshWorksSuccess(workList) {
    return {
        type: WORKS_REFRESH_SUCCESS,
        workList,
    };
}

export function refreshWorksFail(error) {
    return {
        type: WORKS_REFRESH_FAIL,
        error,
    };
}
