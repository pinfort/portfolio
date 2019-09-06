import React from 'react';
import IntroductionForm from 'src/features/admin/introduction_form';
import Introduction from 'src/features/admin/introduction';

export default class IntroductionPage extends React.Component {

    render () {
        return (
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <Introduction />
                    <IntroductionForm />
                </div>
            </div>
        );
    }

}
