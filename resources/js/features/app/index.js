import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'src/store/configureStore';
import PortfolioContainer from './containers/portfolio_container';
import { BrowserRouter } from 'react-router-dom';

export const store = configureStore();

export default class Portfolio extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <PortfolioContainer />
                </BrowserRouter>
            </Provider>
        );
    }

}
