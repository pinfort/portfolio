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
    ADMIN_ACCOUNT_VISIBLE_REQUEST,
    ADMIN_ACCOUNT_VISIBLE_SUCCESS,
    ADMIN_ACCOUNT_VISIBLE_FAIL,
    ADMIN_ACCOUNT_INVISIBLE_REQUEST,
    ADMIN_ACCOUNT_INVISIBLE_SUCCESS,
    ADMIN_ACCOUNT_INVISIBLE_FAIL,
} from 'src/actions/admin_accounts';
import { Map, fromJS, ToJS } from 'immutable';

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

function visibleAccount(state, accountId) {
    let newState = [];
    state.get('accounts').map((account) => {
        if (account.get('id') !== accountId) {
            newState.push(account);
        } else {
            let account_js = ToJS(account);
            account_js.visible = true;
            newState.push(account_js);
        }
    });
    return state.set('accounts', fromJS(newState));
}

function invisibleAccount(state, accountId) {
    let newState = [];
    state.get('accounts').map((account) => {
        if (account.get('id') !== accountId) {
            newState.push(account);
        } else {
            let account_js = ToJS(account);
            account_js.visible = false;
            newState.push(account_js);
        }
    });
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
    case ADMIN_ACCOUNT_VISIBLE_SUCCESS:
        return visibleAccount(state, action.accountId);
    case ADMIN_ACCOUNT_INVISIBLE_SUCCESS:
        return invisibleAccount(state, action.accountId);
    case ADMIN_ACCOUNT_ADD_REQUEST:
    case ADMIN_ACCOUNT_ADD_FAIL:
    case ADMIN_ACCOUNT_DELETE_REQUEST:
    case ADMIN_ACCOUNT_DELETE_FAIL:
    case ADMIN_ACCOUNTS_REFRESH_REQUEST:
    case ADMIN_ACCOUNTS_REFRESH_FAIL:
    case ADMIN_ACCOUNT_VISIBLE_REQUEST:
    case ADMIN_ACCOUNT_VISIBLE_FAIL:
    case ADMIN_ACCOUNT_INVISIBLE_REQUEST:
    case ADMIN_ACCOUNT_INVISIBLE_FAIL:
    default:
        return state;
    }
}
