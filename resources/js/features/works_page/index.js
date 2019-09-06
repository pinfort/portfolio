import React from 'react';
import Tabs from 'src/features/home_page/tabs';
import Works from 'src/features/works';

export default class WorksPage extends React.Component {

    render () {
        return (
            <div className='row justify-content-center'>
                <div className='col-md-10'>
                    <Tabs now='/works' />
                    <div className='tab-content portfolio-main-tab-body'>
                        <div className='tab-pane active'>
                            <Works />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
