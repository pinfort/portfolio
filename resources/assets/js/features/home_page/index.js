import React from 'react';

import Skills from 'src/features/skills';
import Licenses from 'src/features/licenses';

export default class HomePage extends React.Component {

    render () {
        return (
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <Skills />
                    <Licenses />
                </div>
            </div>
        );
    }

}
