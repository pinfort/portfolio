import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from 'src/features/home_page';
import laroute from 'src/laroute.js';

export default class Portfolio extends React.Component {

    render () {
        return (
            <Switch>
                <Route path={laroute.route('home')} component={HomePage} />
            </Switch>
        );
    }

}
