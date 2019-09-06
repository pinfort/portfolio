import React from 'react';
import ServicesForm from 'src/features/admin/services_form';
import Services from 'src/features/admin/services';

export default class ServicesPage extends React.Component {

    render () {
        return (
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <Services />
                    <ServicesForm />
                </div>
            </div>
        );
    }

}
