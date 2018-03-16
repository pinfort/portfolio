import React from 'react';
import SkillCategories from 'src/features/admin/skill_categories';
import SkillCategoriesForm from 'src/features/admin/skill_categories_form';

export default class SkillCategoriesPage extends React.Component {

    render () {
        return (
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <SkillCategories />
                    <SkillCategoriesForm />
                </div>
            </div>
        );
    }

}
