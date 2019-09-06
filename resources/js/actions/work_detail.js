import api from 'src/components/api';

export const WORK_DETAIL_REFRESH_REQUEST = 'WORK_DETAIL_REFRESH_REQUEST';
export const WORK_DETAIL_REFRESH_SUCCESS = 'WORK_DETAIL_REFRESH_SUCCESS';
export const WORK_DETAIL_REFRESH_FAIL    = 'WORK_DETAIL_REFRESH_FAIL';

export function refreshWorkDetail(id) {
    return (dispatch, getState) => {
        dispatch(refreshWorkDetailRequest());

        api(getState).get(
            '/api/works/' + id,
        ).then(response => {
            dispatch(refreshWorkDetailSuccess(response.data));
        }).catch(error => {
            dispatch(refreshWorkDetailFail(error));
        });
    };
}

export function refreshWorkDetailRequest() {
    return {
        type: WORK_DETAIL_REFRESH_REQUEST,
    };
}

export function refreshWorkDetailSuccess(work) {
    return {
        type: WORK_DETAIL_REFRESH_SUCCESS,
        work,
    };
}

export function refreshWorkDetailFail(error) {
    return {
        type: WORK_DETAIL_REFRESH_FAIL,
        error,
    };
}
