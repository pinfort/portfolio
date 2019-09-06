import React from 'react';
import Skills from 'src/features/admin/skills';
import SkillsForm from 'src/features/admin/skills_form';

export default class SkillsPage extends React.Component {

    render () {
        return (
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <Skills />
                    <SkillsForm />
                </div>
            </div>
        );
    }

}
