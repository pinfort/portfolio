import React, { Component } from 'react';
import { List, Map } from 'immutable';
import { Provider } from 'react-redux';
import SimpleTable from 'src/components/table/simple_table';
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
                                    <SimpleTable
                                        tid='main_table'
                                        tclass='table'
                                        thead={List.of(
                                            List.of(
                                                Map({ 'isTitle': true, 'isLink': false, 'txt': 'test title' })
                                            ),
                                            List.of(
                                                Map({ 'isTitle': true, 'isLink': false, 'txt': 'test title2' })
                                            )
                                        )}
                                        tbody={List.of(
                                            List.of(
                                                Map({ 'isTitle': false, 'isLink': false, 'txt': 'test body' })
                                            ),
                                            List.of(
                                                Map({ 'isTitle': false, 'isLink': false, 'txt': 'test body2' })
                                            )
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }

}
