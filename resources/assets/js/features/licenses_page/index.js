import React from 'react';
import Tabs from 'src/features/home_page/tabs';
import Licenses from 'src/features/licenses';

export default class HomePage extends React.Component {

    render () {
        return (
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <Tabs now='/licenses' />
                    <div className='tab-content portfolio-main-tab-body'>
                        <div className='tab-pane active'>
                            <Licenses />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
