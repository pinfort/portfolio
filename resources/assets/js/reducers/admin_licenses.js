import {
    ADMIN_LICENSES_REFRESH_REQUEST,
    ADMIN_LICENSES_REFRESH_SUCCESS,
    ADMIN_LICENSES_REFRESH_FAIL,
    ADMIN_LICENSE_DELETE_REQUEST,
    ADMIN_LICENSE_DELETE_SUCCESS,
    ADMIN_LICENSE_DELETE_FAIL,
    ADMIN_LICENSE_ADD_REQUEST,
    ADMIN_LICENSE_ADD_SUCCESS,
    ADMIN_LICENSE_ADD_FAIL,
} from 'src/actions/admin_licenses';
import { Map, fromJS } from 'immutable';

function normalizeLicenses(state, licenseList) {
    return state.set('table', fromJS(licenseList));
}

function deleteLicense(state, licenseId) {
    let newState = [];
    state.get('table').map((license) => {

        if (license.get('id') !== licenseId) {
            newState.push(license);
        }
    });
    return state.set('table', fromJS(newState));
}

function addLicense(state, license) {
    let newState = state.get('table').toJS();
    newState.push(license);
    return state.set('table', fromJS(newState));
}

const initialState = Map({
    table: null,
});

export default function admin_licenses(state = initialState, action) {
    switch (action.type) {
    case ADMIN_LICENSES_REFRESH_SUCCESS:
        return normalizeLicenses(state, action.licenseList);
    case ADMIN_LICENSE_DELETE_SUCCESS:
        return deleteLicense(state, action.deletedLicenseId);
    case ADMIN_LICENSE_ADD_SUCCESS:
        return addLicense(state, action.addedLicense);
    case ADMIN_LICENSE_ADD_REQUEST:
    case ADMIN_LICENSE_ADD_FAIL:
    case ADMIN_LICENSE_DELETE_REQUEST:
    case ADMIN_LICENSE_DELETE_FAIL:
    case ADMIN_LICENSES_REFRESH_REQUEST:
    case ADMIN_LICENSES_REFRESH_FAIL:
    default:
        return state;
    }
}
