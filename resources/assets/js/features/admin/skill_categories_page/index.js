import React from 'react';
import SkillCategories from 'src/features/admin/skill_categories';
import SkillCategoriesForm from 'src/features/admin/skill_categories_form';

export default class SkillCategoriesPage extends React.Component {

    render () {
        return (
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <div className='alert alert-danger' role='alert'>
                        <strong>Denger</strong> カテゴリを削除すると、そのカテゴリ内のスキルは削除されます！
                    </div>
                    <SkillCategories />
                    <SkillCategoriesForm />
                </div>
            </div>
        );
    }

}
