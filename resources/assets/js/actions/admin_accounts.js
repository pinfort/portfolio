import api from 'src/components/api';

export const ADMIN_ACCOUNTS_REFRESH_REQUEST = 'ADMIN_ACCOUNTS_REFRESH_REQUEST';
export const ADMIN_ACCOUNTS_REFRESH_SUCCESS = 'ADMIN_ACCOUNTS_REFRESH_SUCCESS';
export const ADMIN_ACCOUNTS_REFRESH_FAIL    = 'ADMIN_ACCOUNTS_REFRESH_FAIL';

export function refreshAccounts() {
    return (dispatch, getState) => {
        dispatch(refreshAccountsRequest());

        api(getState).get(
            '/api/accounts',
        ).then(response => {
            dispatch(refreshAccountsSuccess(response.data));
        }).catch(error => {
            dispatch(refreshAccountsFail(error));
        });
    };
}

export function refreshAccountsRequest() {
    return {
        type: ADMIN_ACCOUNTS_REFRESH_REQUEST,
    };
}

export function refreshAccountsSuccess(accountList) {
    return {
        type: ADMIN_ACCOUNTS_REFRESH_SUCCESS,
        accountList,
    };
}

export function refreshAccountsFail(error) {
    return {
        type: ADMIN_ACCOUNTS_REFRESH_FAIL,
        error,
    };
}

export const ADMIN_ACCOUNT_DELETE_REQUEST = 'ADMIN_ACCOUNT_DELETE_REQUEST';
export const ADMIN_ACCOUNT_DELETE_SUCCESS = 'ADMIN_ACCOUNT_DELETE_SUCCESS';
export const ADMIN_ACCOUNT_DELETE_FAIL    = 'ADMIN_ACCOUNT_DELETE_FAIL';

export function deleteAccount(id) {
    return (dispatch, getState) => {
        dispatch(deleteAccountRequest());

        api(getState).delete(
            '/api/accounts/' + id,
        ).then(response => {
            dispatch(deleteAccountSuccess(response.data.data.id));
        }).catch(error => {
            dispatch(deleteAccountFail(error));
        });
    };
}

export function deleteAccountRequest() {
    return {
        type: ADMIN_ACCOUNT_DELETE_REQUEST,
    };
}

export function deleteAccountSuccess(deletedAccountId) {
    return {
        type: ADMIN_ACCOUNT_DELETE_SUCCESS,
        deletedAccountId,
    };
}

export function deleteAccountFail(error) {
    return {
        type: ADMIN_ACCOUNT_DELETE_FAIL,
        error,
    };
}

export const ADMIN_ACCOUNT_ADD_REQUEST = 'ADMIN_ACCOUNT_ADD_REQUEST';
export const ADMIN_ACCOUNT_ADD_SUCCESS = 'ADMIN_ACCOUNT_ADD_SUCCESS';
export const ADMIN_ACCOUNT_ADD_FAIL    = 'ADMIN_ACCOUNT_ADD_FAIL';

export function addAccount(data) {
    return (dispatch, getState) => {
        dispatch(addAccountRequest());

        let params = new URLSearchParams();

        for(let k of Object.keys(data)) {
            params.append(k, data[k]);
        }

        api(getState).post(
            '/api/accounts/',
            params,
        ).then(response => {
            dispatch(addAccountSuccess(response.data.data.account));
        }).catch(error => {
            dispatch(addAccountFail(error));
        });
    };
}

export function addAccountRequest() {
    return {
        type: ADMIN_ACCOUNT_ADD_REQUEST,
    };
}

export function addAccountSuccess(addedAccount) {
    return {
        type: ADMIN_ACCOUNT_ADD_SUCCESS,
        addedAccount,
    };
}

export function addAccountFail(error) {
    return {
        type: ADMIN_ACCOUNT_ADD_FAIL,
        error,
    };
}
