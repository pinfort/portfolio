import api from 'src/components/api';

export const ADMIN_WORKS_REFRESH_REQUEST = 'ADMIN_WORKS_REFRESH_REQUEST';
export const ADMIN_WORKS_REFRESH_SUCCESS = 'ADMIN_WORKS_REFRESH_SUCCESS';
export const ADMIN_WORKS_REFRESH_FAIL    = 'ADMIN_WORKS_REFRESH_FAIL';

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
        type: ADMIN_WORKS_REFRESH_REQUEST,
    };
}

export function refreshWorksSuccess(workList) {
    return {
        type: ADMIN_WORKS_REFRESH_SUCCESS,
        workList,
    };
}

export function refreshWorksFail(error) {
    return {
        type: ADMIN_WORKS_REFRESH_FAIL,
        error,
    };
}

export const ADMIN_WORK_DELETE_REQUEST = 'ADMIN_WORK_DELETE_REQUEST';
export const ADMIN_WORK_DELETE_SUCCESS = 'ADMIN_WORK_DELETE_SUCCESS';
export const ADMIN_WORK_DELETE_FAIL    = 'ADMIN_WORK_DELETE_FAIL';

export function deleteWork(id) {
    return (dispatch, getState) => {
        dispatch(deleteWorkRequest());

        api(getState).delete(
            '/api/works/' + id,
        ).then(response => {
            dispatch(deleteWorkSuccess(response.data.data.id));
        }).catch(error => {
            dispatch(deleteWorkFail(error));
        });
    };
}

export function deleteWorkRequest() {
    return {
        type: ADMIN_WORK_DELETE_REQUEST,
    };
}

export function deleteWorkSuccess(deletedWorkId) {
    return {
        type: ADMIN_WORK_DELETE_SUCCESS,
        deletedWorkId,
    };
}

export function deleteWorkFail(error) {
    return {
        type: ADMIN_WORK_DELETE_FAIL,
        error,
    };
}

export const ADMIN_WORK_ADD_REQUEST = 'ADMIN_WORK_ADD_REQUEST';
export const ADMIN_WORK_ADD_SUCCESS = 'ADMIN_WORK_ADD_SUCCESS';
export const ADMIN_WORK_ADD_FAIL    = 'ADMIN_WORK_ADD_FAIL';

export function addWork(data) {
    return (dispatch, getState) => {
        dispatch(addWorkRequest());

        let params = new URLSearchParams();

        for(let k of Object.keys(data)) {
            params.append(k, data[k]);
        }

        api(getState).post(
            '/api/works/',
            params,
        ).then(response => {
            dispatch(addWorkSuccess(response.data.data.work));
        }).catch(error => {
            dispatch(addWorkFail(error));
        });
    };
}

export function addWorkRequest() {
    return {
        type: ADMIN_WORK_ADD_REQUEST,
    };
}

export function addWorkSuccess(addedWork) {
    return {
        type: ADMIN_WORK_ADD_SUCCESS,
        addedWork,
    };
}

export function addWorkFail(error) {
    return {
        type: ADMIN_WORK_ADD_FAIL,
        error,
    };
}
