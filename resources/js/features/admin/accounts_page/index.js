import React from 'react';
import Accounts from 'src/features/admin/accounts';
import AccountsForm from 'src/features/admin/accounts_form';

export default class AccountsPage extends React.Component {

    render () {
        return (
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <Accounts />
                    <AccountsForm />
                </div>
            </div>
        );
    }

}
