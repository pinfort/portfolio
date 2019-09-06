import {
    ACCOUNTS_REFRESH_REQUEST,
    ACCOUNTS_REFRESH_SUCCESS,
    ACCOUNTS_REFRESH_FAIL,
} from 'src/actions/accounts';
import { Map, fromJS } from 'immutable';

function normalizeAccounts(state, accountList) {
    return state.set('accounts', fromJS(accountList));
}

const initialState = Map({
    accounts: null,
});

export default function accounts(state = initialState, action) {
    switch (action.type) {
    case ACCOUNTS_REFRESH_SUCCESS:
        return normalizeAccounts(state, action.accountList);
    case ACCOUNTS_REFRESH_REQUEST:
    case ACCOUNTS_REFRESH_FAIL:
    default:
        return state;
    }
}
