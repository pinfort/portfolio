import {
    LICENSES_REFRESH_REQUEST,
    LICENSES_REFRESH_SUCCESS,
    LICENSES_REFRESH_FAIL,
} from 'src/actions/licenses';

function normalizeLicenses(state, licenseList) {
    licenseList = { ...licenseList };

    return state
        .set('table', licenseList);
}

const initialState = {
    table: null,
};

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
