import React from 'react';
import Tabs from 'src/features/home_page/tabs';
import Accounts from 'src/features/accounts';

export default class HomePage extends React.Component {

    render () {
        return (
            <div className='row justify-content-center'>
                <div className='col-md-10'>
                    <Tabs now='/accounts' />
                    <div className='tab-content portfolio-main-tab-body'>
                        <div className='tab-pane active'>
                            <Accounts />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
