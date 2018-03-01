import React, { Component } from 'react';
import { Provider } from 'react-redux';

export default class Portfolio extends Component {
    render() {
        return (
            <Provider>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">Example Component</div>

                                <div className="card-body">
                                    I'm an example component!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}
