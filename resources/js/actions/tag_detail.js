import api from 'src/components/api';

export const TAG_DETAIL_REFRESH_REQUEST = 'TAG_DETAIL_REFRESH_REQUEST';
export const TAG_DETAIL_REFRESH_SUCCESS = 'TAG_DETAIL_REFRESH_SUCCESS';
export const TAG_DETAIL_REFRESH_FAIL    = 'TAG_DETAIL_REFRESH_FAIL';

export function refreshTagDetail(id) {
    return (dispatch, getState) => {
        dispatch(refreshTagDetailRequest());

        api(getState).get(
            '/api/tags/' + id,
        ).then(response => {
            dispatch(refreshTagDetailSuccess(response.data));
        }).catch(error => {
            dispatch(refreshTagDetailFail(error));
        });
    };
}

export function refreshTagDetailRequest() {
    return {
        type: TAG_DETAIL_REFRESH_REQUEST,
    };
}

export function refreshTagDetailSuccess(tag) {
    return {
        type: TAG_DETAIL_REFRESH_SUCCESS,
        tag,
    };
}

export function refreshTagDetailFail(error) {
    return {
        type: TAG_DETAIL_REFRESH_FAIL,
        error,
    };
}
