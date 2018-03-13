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
