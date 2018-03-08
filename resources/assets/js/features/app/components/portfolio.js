import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from 'src/features/home_page';

export default class Portfolio extends React.Component {

    render () {
        return (
            <Switch>
                <Route path='/home' component={HomePage} />
            </Switch>
        );
    }

}
