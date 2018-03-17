import React from 'react';
import Tabs from 'src/features/home_page/tabs';
import Skills from 'src/features/skills';

export default class SkillsPage extends React.Component {

    render () {
        return (
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <Tabs now='/skills' />
                    <div className='tab-content portfolio-main-tab-body'>
                        <div className='tab-pane active'>
                            <Skills />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
