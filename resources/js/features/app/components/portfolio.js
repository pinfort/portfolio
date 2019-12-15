import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from 'src/features/home_page';
import AdminLicensesPage from 'src/features/admin/licenses_page';
import AdminSkillsPage from 'src/features/admin/skills_page';
import AdminSkillCategoriesPage from 'src/features/admin/skill_categories_page';
import AdminWorksPage from 'src/features/admin/works_page';
import AdminServicesPage from 'src/features/admin/services_page';
import AdminAccountsPage from 'src/features/admin/accounts_page';
import AdminIntroductionPage from 'src/features/admin/introduction_page';
import WorkDetail from 'src/features/work_detail';
import TagDetail from 'src/features/tag_detail';
import Privacy from 'src/features/privacy';
import laroute from 'src/laroute.js';

export default class Portfolio extends React.Component {

    render () {
        return (
            <Switch>
                <Route exact path={laroute.route('home')} component={HomePage} />
                <Route path={laroute.route('admin_licenses')} component={AdminLicensesPage} />
                <Route exact path={laroute.route('admin_skills')} component={AdminSkillsPage} />
                <Route exact path={laroute.route('admin_skill_categories')} component={AdminSkillCategoriesPage} />
                <Route path={laroute.route('admin_works')} component={AdminWorksPage} />
                <Route path={laroute.route('admin_services')} component={AdminServicesPage} />
                <Route path={laroute.route('admin_accounts')} component={AdminAccountsPage} />
                <Route path={laroute.route('admin_introduction')} component={AdminIntroductionPage} />
                <Route path={laroute.route('work_detail').replace(/\{([^\{\}]*)\}/g, ':$1')} component={WorkDetail} />
                <Route path={laroute.route('tag_detail').replace(/\{([^\{\}]*)\}/g, ':$1')} component={TagDetail} />
                <Route path={laroute.route('privacy')} component={Privacy} />
            </Switch>
        );
    }

}
