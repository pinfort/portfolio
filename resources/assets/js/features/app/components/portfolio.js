import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from 'src/features/home_page';
import LicensesPage from 'src/features/licenses_page';
import SkillsPage from 'src/features/skills_page';
import AdminLicensesPage from 'src/features/admin/licenses_page';
import AdminSkillsPage from 'src/features/admin/skills_page';
import AdminSkillCategoriesPage from 'src/features/admin/skill_categories_page';
import AdminWorksPage from 'src/features/admin/works_page';
import laroute from 'src/laroute.js';

export default class Portfolio extends React.Component {

    render () {
        return (
            <Switch>
                <Route path={laroute.route('home')} component={HomePage} />
                <Route path={laroute.route('licenses')} component={LicensesPage} />
                <Route path={laroute.route('skills')} component={SkillsPage} />
                <Route path={laroute.route('admin_licenses')} component={AdminLicensesPage} />
                <Route exact path={laroute.route('admin_skills')} component={AdminSkillsPage} />
                <Route exact path={laroute.route('admin_skill_categories')} component={AdminSkillCategoriesPage} />
                <Route path={laroute.route('admin_works')} component={AdminWorksPage} />
            </Switch>
        );
    }

}
