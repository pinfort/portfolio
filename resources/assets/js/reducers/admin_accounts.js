import {
    ADMIN_ACCOUNTS_REFRESH_REQUEST,
    ADMIN_ACCOUNTS_REFRESH_SUCCESS,
    ADMIN_ACCOUNTS_REFRESH_FAIL,
    ADMIN_ACCOUNT_DELETE_REQUEST,
    ADMIN_ACCOUNT_DELETE_SUCCESS,
    ADMIN_ACCOUNT_DELETE_FAIL,
    ADMIN_ACCOUNT_ADD_REQUEST,
    ADMIN_ACCOUNT_ADD_SUCCESS,
    ADMIN_ACCOUNT_ADD_FAIL,
} from 'src/actions/admin_accounts';
import { Map, fromJS } from 'immutable';

function normalizeAccounts(state, accountList) {
    return state.set('accounts', fromJS(accountList));
}

function deleteAccount(state, accountId) {
    let newState = [];
    state.get('accounts').map((account) => {

        if (account.get('id') !== accountId) {
            newState.push(account);
        }
    });
    return state.set('accounts', fromJS(newState));
}

function addAccount(state, account) {
    let newState = state.get('accounts').toJS();
    newState.push(account);
    return state.set('accounts', fromJS(newState));
}

const initialState = Map({
    accounts: null,
});

export default function admin_accounts(state = initialState, action) {
    switch (action.type) {
    case ADMIN_ACCOUNTS_REFRESH_SUCCESS:
        return normalizeAccounts(state, action.accountList);
    case ADMIN_ACCOUNT_DELETE_SUCCESS:
        return deleteAccount(state, action.deletedAccountId);
    case ADMIN_ACCOUNT_ADD_SUCCESS:
        return addAccount(state, action.addedAccount);
    case ADMIN_ACCOUNT_ADD_REQUEST:
    case ADMIN_ACCOUNT_ADD_FAIL:
    case ADMIN_ACCOUNT_DELETE_REQUEST:
    case ADMIN_ACCOUNT_DELETE_FAIL:
    case ADMIN_ACCOUNTS_REFRESH_REQUEST:
    case ADMIN_ACCOUNTS_REFRESH_FAIL:
    default:
        return state;
    }
}
