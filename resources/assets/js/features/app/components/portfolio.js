import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from 'src/features/home_page';
import LicensesPage from 'src/features/admin/licenses_page';
import SkillsPage from 'src/features/admin/skills_page';
import laroute from 'src/laroute.js';

export default class Portfolio extends React.Component {

    render () {
        return (
            <Switch>
                <Route path={laroute.route('home')} component={HomePage} />
                <Route path={laroute.route('admin_licenses')} component={LicensesPage} />
                <Route path={laroute.route('admin_skills')} component={SkillsPage} />
            </Switch>
        );
    }

}
