import React from 'react';
import Tabs from 'src/features/home_page/tabs';
import Skills from 'src/features/skills';
import Licenses from 'src/features/licenses';
import Works from 'src/features/works';

export default class HomePage extends React.Component {

    render () {
        return (
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <Tabs now='/home' />
                    <div className='tab-content portfolio-main-tab-body'>
                        <div className='tab-pane active'>
                            <Skills />
                            <Licenses />
                            <Works />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
