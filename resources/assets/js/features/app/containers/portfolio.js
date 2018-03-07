import React, { Component } from 'react';
import { List, Map } from 'immutable';
import { Provider } from 'react-redux';
import Licenses from 'src/features/licenses';
import configureStore from 'src/store/configureStore';

export const store = configureStore();

export default class Portfolio extends Component {

    render() {
        return (
            <Provider store={store}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-8'>
                            <div className='card'>
                                <div className='card-header'>Example Component</div>

                                <div className='card-body'>
                                    <Licenses />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }

}
