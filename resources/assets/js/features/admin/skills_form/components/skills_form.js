import React from 'react';

import ImmutablePropTypes from 'react-immutable-proptypes';

export default class SkillsForm extends React.Component {

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
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
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

    handleChangeCategory(event) {
        this.setState({
            skill_category_id: event.target.value,
        });
    }

    handleChangeStatus(event) {
        this.setState({
            status: event.target.value,
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

    createCategories() {
        const { skill_category } = this.props;
        if ( this.props.skill_category === null || this.props.skill_category === undefined ) {
            return;
        }
        skill_category.map((skill_cat) => (
            <option value={skill_cat.get('id')}>{skill_cat.get('name')}</option>
        ));
    }

    render() {
        return (
            <div className='card m-3'>
                <div className='card-header'>Add Skill</div>
                <div className='card-body'>
                    <form action='javascript:void(0)' onSubmit={this.handleSubmit}>
                        <div className='form-group row'>
                            <label htmlFor='getSkill' className='col-sm-2 col-form-label'>スキル名</label>
                            <div className='col-sm-10'>
                                <input type='text' name='name' className='form-control' id='getSkill' placeholder='What?' value={this.state.name} onChange={this.handleChangeName} />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='skillCategory' className='col-sm-2 col-form-label'>スキルカテゴリ</label>
                            <div className='col-sm-10'>
                                <select name='skill_category_id' className='form-control' id='skillCategory' value={this.state.skill_category_id} onBlur={this.handleChangeCategory}>
                                    <option value='0'>select</option>
                                    {this.createCategories()}
                                </select>
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='skillStatus' className='col-sm-2 col-form-label'>程度</label>
                            <div className='col-sm-10'>
                                <input type='text' name='status' className='form-control' id='skillStatus' placeholder='What?' value={this.state.status} onChange={this.handleChangeStatus} />
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
