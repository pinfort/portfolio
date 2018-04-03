import React from 'react';
import WorksForm from 'src/features/admin/works_form';
import Works from 'src/features/admin/works';

export default class WorksPage extends React.Component {

    render () {
        return (
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <Works />
                    <WorksForm />
                </div>
            </div>
        );
    }

}
