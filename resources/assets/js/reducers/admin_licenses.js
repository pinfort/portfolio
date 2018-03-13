import {
    ADMIN_LICENSES_REFRESH_REQUEST,
    ADMIN_LICENSES_REFRESH_SUCCESS,
    ADMIN_LICENSES_REFRESH_FAIL,
} from 'src/actions/admin_licenses';
import { Map, fromJS } from 'immutable';

function normalizeLicenses(state, licenseList) {
    return state.set('table', fromJS(licenseList));
}

const initialState = Map({
    table: null,
});

export default function admin_licenses(state = initialState, action) {
    switch (action.type) {
    case ADMIN_LICENSES_REFRESH_SUCCESS:
        return normalizeLicenses(state, action.licenseList);
    case ADMIN_LICENSES_REFRESH_REQUEST:
    case ADMIN_LICENSES_REFRESH_FAIL:
    default:
        return state;
    }
}
