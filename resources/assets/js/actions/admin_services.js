import api from 'src/components/api';

export const ADMIN_SERVICES_REFRESH_REQUEST = 'ADMIN_SERVICES_REFRESH_REQUEST';
export const ADMIN_SERVICES_REFRESH_SUCCESS = 'ADMIN_SERVICES_REFRESH_SUCCESS';
export const ADMIN_SERVICES_REFRESH_FAIL    = 'ADMIN_SERVICES_REFRESH_FAIL';

export function refreshServices() {
    return (dispatch, getState) => {
        dispatch(refreshServicesRequest());

        api(getState).get(
            '/api/services',
        ).then(response => {
            dispatch(refreshServicesSuccess(response.data));
        }).catch(error => {
            dispatch(refreshServicesFail(error));
        });
    };
}

export function refreshServicesRequest() {
    return {
        type: ADMIN_SERVICES_REFRESH_REQUEST,
    };
}

export function refreshServicesSuccess(serviceList) {
    return {
        type: ADMIN_SERVICES_REFRESH_SUCCESS,
        serviceList,
    };
}

export function refreshServicesFail(error) {
    return {
        type: ADMIN_SERVICES_REFRESH_FAIL,
        error,
    };
}

export const ADMIN_SERVICE_DELETE_REQUEST = 'ADMIN_SERVICE_DELETE_REQUEST';
export const ADMIN_SERVICE_DELETE_SUCCESS = 'ADMIN_SERVICE_DELETE_SUCCESS';
export const ADMIN_SERVICE_DELETE_FAIL    = 'ADMIN_SERVICE_DELETE_FAIL';

export function deleteService(id) {
    return (dispatch, getState) => {
        dispatch(deleteServiceRequest());

        api(getState).delete(
            '/api/services/' + id,
        ).then(response => {
            dispatch(deleteServiceSuccess(response.data.data.id));
        }).catch(error => {
            dispatch(deleteServiceFail(error));
        });
    };
}

export function deleteServiceRequest() {
    return {
        type: ADMIN_SERVICE_DELETE_REQUEST,
    };
}

export function deleteServiceSuccess(deletedServiceId) {
    return {
        type: ADMIN_SERVICE_DELETE_SUCCESS,
        deletedServiceId,
    };
}

export function deleteServiceFail(error) {
    return {
        type: ADMIN_SERVICE_DELETE_FAIL,
        error,
    };
}

export const ADMIN_SERVICE_ADD_REQUEST = 'ADMIN_SERVICE_ADD_REQUEST';
export const ADMIN_SERVICE_ADD_SUCCESS = 'ADMIN_SERVICE_ADD_SUCCESS';
export const ADMIN_SERVICE_ADD_FAIL    = 'ADMIN_SERVICE_ADD_FAIL';

export function addService(form) {
    return (dispatch, getState) => {
        dispatch(addServiceRequest());

        let params = new FormData(form);

        api(getState).post(
            '/api/services/',
            params,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        ).then(response => {
            dispatch(addServiceSuccess(response.data.data.service));
        }).catch(error => {
            dispatch(addServiceFail(error));
        });
    };
}

export function addServiceRequest() {
    return {
        type: ADMIN_SERVICE_ADD_REQUEST,
    };
}

export function addServiceSuccess(addedService) {
    return {
        type: ADMIN_SERVICE_ADD_SUCCESS,
        addedService,
    };
}

export function addServiceFail(error) {
    return {
        type: ADMIN_SERVICE_ADD_FAIL,
        error,
    };
}
