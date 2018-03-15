import api from 'src/components/api';

export const ADMIN_LICENSES_REFRESH_REQUEST = 'ADMIN_LICENSES_REFRESH_REQUEST';
export const ADMIN_LICENSES_REFRESH_SUCCESS = 'ADMIN_LICENSES_REFRESH_SUCCESS';
export const ADMIN_LICENSES_REFRESH_FAIL    = 'ADMIN_LICENSES_REFRESH_FAIL';

export function refreshLicenses() {
    return (dispatch, getState) => {
        dispatch(refreshLicensesRequest());

        api(getState).get(
            '/api/licenses',
        ).then(response => {
            dispatch(refreshLicensesSuccess(response.data));
        }).catch(error => {
            dispatch(refreshLicensesFail(error));
        });
    };
}

export function refreshLicensesRequest() {
    return {
        type: ADMIN_LICENSES_REFRESH_REQUEST,
    };
}

export function refreshLicensesSuccess(licenseList) {
    return {
        type: ADMIN_LICENSES_REFRESH_SUCCESS,
        licenseList,
    };
}

export function refreshLicensesFail(error) {
    return {
        type: ADMIN_LICENSES_REFRESH_FAIL,
        error,
    };
}

export const ADMIN_LICENSE_DELETE_REQUEST = 'ADMIN_LICENSE_DELETE_REQUEST';
export const ADMIN_LICENSE_DELETE_SUCCESS = 'ADMIN_LICENSE_DELETE_SUCCESS';
export const ADMIN_LICENSE_DELETE_FAIL    = 'ADMIN_LICENSE_DELETE_FAIL';

export function deleteLicense(id) {
    return (dispatch, getState) => {
        dispatch(deleteLicenseRequest());

        api(getState).delete(
            '/api/licenses/' + id,
        ).then(response => {
            dispatch(deleteLicenseSuccess(response.data.data.id));
        }).catch(error => {
            dispatch(deleteLicenseFail(error));
        });
    };
}

export function deleteLicenseRequest() {
    return {
        type: ADMIN_LICENSE_DELETE_REQUEST,
    };
}

export function deleteLicenseSuccess(deletedLicenseId) {
    return {
        type: ADMIN_LICENSE_DELETE_SUCCESS,
        deletedLicenseId,
    };
}

export function deleteLicenseFail(error) {
    return {
        type: ADMIN_LICENSE_DELETE_FAIL,
        error,
    };
}

export const ADMIN_LICENSE_ADD_REQUEST = 'ADMIN_LICENSE_ADD_REQUEST';
export const ADMIN_LICENSE_ADD_SUCCESS = 'ADMIN_LICENSE_ADD_SUCCESS';
export const ADMIN_LICENSE_ADD_FAIL    = 'ADMIN_LICENSE_ADD_FAIL';

export function addLicense(data) {
    return (dispatch, getState) => {
        dispatch(addLicenseRequest());

        let params = new URLSearchParams();

        for(let k of Object.keys(data)) {
            params.append(k, data[k]);
        }

        api(getState).post(
            '/api/licenses/',
            params,
        ).then(response => {
            dispatch(addLicenseSuccess(response.data.data.license));
        }).catch(error => {
            dispatch(addLicenseFail(error));
        });
    };
}

export function addLicenseRequest() {
    return {
        type: ADMIN_LICENSE_ADD_REQUEST,
    };
}

export function addLicenseSuccess(addedLicense) {
    return {
        type: ADMIN_LICENSE_ADD_SUCCESS,
        addedLicense,
    };
}

export function addLicenseFail(error) {
    return {
        type: ADMIN_LICENSE_ADD_FAIL,
        error,
    };
}
