import React from 'react';

import ImmutablePropTypes from 'react-immutable-proptypes';

export default class SkillCategoriesForm extends React.Component {

    static propTypes = {
        skill_category: ImmutablePropTypes.list,
    }

    constructor() {
        super();
        this.state = {
            name: '',
            skill_category_id: 0,
            status: '',
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        if ( this.props.skill_category === null || this.props.skill_category === undefined ) {
            this.props.onRefresh();
        }
    }

    handleChangeName(event) {
        this.setState({
            name: event.target.value,
        });
    }

    handleSubmit(event) {
        this.props.onSubmit(this.state);
        this.setState({
            name: '',
            skill_category_id: 0,
            status: '',
        });
        event.preventDefault();
    }

    render() {
        return (
            <div className='card m-3'>
                <div className='card-header'>Add Skill Category</div>
                <div className='card-body'>
                    <form action='javascript:void(0)' onSubmit={this.handleSubmit}>
                        <div className='form-group row'>
                            <label htmlFor='getSkill' className='col-sm-2 col-form-label'>スキルカテゴリ名</label>
                            <div className='col-sm-10'>
                                <input type='text' name='name' className='form-control' id='getSkill' placeholder='What?' value={this.state.name} onChange={this.handleChangeName} />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className='col-sm-10'>
                                <button type='submit' className='btn btn-primary'>Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}
