import React from 'react';
import { Provider } from 'react-redux';
import Licenses from 'src/features/licenses';
import Skills from 'src/features/skills';
import configureStore from 'src/store/configureStore';

export const store = configureStore();

export default class Portfolio extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-8'>
                            <Skills />
                            <Licenses />
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }

}
