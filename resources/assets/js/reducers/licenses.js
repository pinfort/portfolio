import {
    LICENSES_REFRESH_REQUEST,
    LICENSES_REFRESH_SUCCESS,
    LICENSES_REFRESH_FAIL,
} from 'src/actions/licenses';
import { Map, fromJS } from 'immutable';

function normalizeLicenses(state, licenseList) {
    return state.set('table', fromJS(licenseList));
}

const initialState = Map({
    table: null,
});

export default function licenses(state = initialState, action) {
    switch (action.type) {
    case LICENSES_REFRESH_SUCCESS:
        return normalizeLicenses(state, action.licenseList);
    case LICENSES_REFRESH_REQUEST:
    case LICENSES_REFRESH_FAIL:
    default:
        return state;
    }
}
