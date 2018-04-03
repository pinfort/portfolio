import api from 'src/components/api';

export const ACCOUNTS_REFRESH_REQUEST = 'ACCOUNTS_REFRESH_REQUEST';
export const ACCOUNTS_REFRESH_SUCCESS = 'ACCOUNTS_REFRESH_SUCCESS';
export const ACCOUNTS_REFRESH_FAIL    = 'ACCOUNTS_REFRESH_FAIL';

export function refreshAccounts() {
    return (dispatch, getState) => {
        dispatch(refreshAccountsRequest());

        api(getState).get(
            '/api/accounts?guest=true',
        ).then(response => {
            dispatch(refreshAccountsSuccess(response.data));
        }).catch(error => {
            dispatch(refreshAccountsFail(error));
        });
    };
}

export function refreshAccountsRequest() {
    return {
        type: ACCOUNTS_REFRESH_REQUEST,
    };
}

export function refreshAccountsSuccess(accountList) {
    return {
        type: ACCOUNTS_REFRESH_SUCCESS,
        accountList,
    };
}

export function refreshAccountsFail(error) {
    return {
        type: ACCOUNTS_REFRESH_FAIL,
        error,
    };
}
