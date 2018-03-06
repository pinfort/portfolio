import api from 'src/components/api';

export const LICENSES_REFRESH_REQUEST = 'LICENSES_REFRESH_REQUEST';
export const LICENSES_REFRESH_SUCCESS = 'LICENSES_REFRESH_SUCCESS';
export const LICENSES_REFRESH_FAIL    = 'LICENSES_REFRESH_FAIL';

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
        type: LICENSES_REFRESH_REQUEST,
    };
}

export function refreshLicensesSuccess(LicensesList) {
    return {
        type: LICENSES_REFRESH_SUCCESS,
        LicensesList,
    };
}

export function refreshLicensesFail(error) {
    return {
        type: LICENSES_REFRESH_FAIL,
        error,
    };
}
