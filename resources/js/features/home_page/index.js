import React from 'react';
import Tabs from 'src/features/home_page/tabs';
import Introduction from 'src/features/introduction';
import Skills from 'src/features/skills';
import Licenses from 'src/features/licenses';
import Works from 'src/features/works';
import Accounts from 'src/features/accounts';

export default class HomePage extends React.Component {

    render () {
        return (
            <div className='align-content-center'>
                <h1 className='text-center'>Pinfort</h1>
                <section>
                    <Introduction />
                </section>
                <section>
                    <Skills />
                </section>
                <section>
                    <Licenses />
                </section>
                <section>
                    <Works />
                </section>
                <section>
                    <Accounts />
                </section>
            </div>
        );
    }

}
