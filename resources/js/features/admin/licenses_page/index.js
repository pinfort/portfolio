import React from 'react';
import LicensesForm from 'src/features/admin/licenses_form';
import Licenses from 'src/features/admin/licenses';

export default class LicensesPage extends React.Component {

    render () {
        return (
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <Licenses />
                    <LicensesForm />
                </div>
            </div>
        );
    }

}
