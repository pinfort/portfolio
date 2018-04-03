import React from 'react';

import ImmutablePropTypes from 'react-immutable-proptypes';
import ToggleButton from 'react-toggle-button';

export default class SkillsForm extends React.Component {

    static propTypes = {
        services: ImmutablePropTypes.list,
    }

    constructor() {
        super();
        this.state = {
            user_name: '',
            service_id: '0',
            description: '',
            user_page_link: '',
            visible: true,
        };
        this.handleChangeService = this.handleChangeService.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeLink = this.handleChangeLink.bind(this);
        this.handleChangeVisible = this.handleChangeVisible.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        if ( this.props.services === null || this.props.services === undefined ) {
            this.props.onRefresh();
        }
    }

    handleChangeName(event) {
        this.setState({
            user_name: event.target.value,
        });
    }

    handleChangeService(event) {
        this.setState({
            service_id: event.target.value,
        });
    }

    handleChangeDescription(event) {
        this.setState({
            description: event.target.value,
        });
    }

    handleChangeLink(event) {
        this.setState({
            user_page_link: event.target.value,
        });
    }

    handleChangeVisible(value) {
        this.setState({
            visible: !value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.service_id === '0') {
            this.props.onError('please select service');
            return;
        }
        this.props.onSubmit(this.state);
        this.setState({
            user_name: '',
            service_id: '0',
            description: '',
            user_page_link: '',
            visible: true,
        });
    }

    createCategories() {
        const { services } = this.props;
        let ret_services = [];
        if ( this.props.services === null || this.props.services === undefined ) {
            return ret_services;
        }
        services.map((service) => {
            ret_services.push(<option key={service.get('id')} value={service.get('id')}>{service.get('name')}</option>);
        });
        return ret_services;
    }

    render() {
        return (
            <div className='card m-3'>
                <div className='card-header'>Add Account</div>
                <div className='card-body'>
                    <form action='javascript:void(0)' onSubmit={this.handleSubmit}>
                        <div className='form-group row'>
                            <label htmlFor='accountName' className='col-sm-2 col-form-label'>ユーザー名</label>
                            <div className='col-sm-10'>
                                <input type='text' name='user_name' className='form-control' id='accountName' placeholder='What?' value={this.state.user_name} onChange={this.handleChangeName} />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='accountService' className='col-sm-2 col-form-label'>サービス</label>
                            <div className='col-sm-10'>
                                <select name='service_id' className='form-control' id='accountService' value={this.state.service_id} onChange={this.handleChangeService} onBlur={this.handleChangeService}>
                                    <option value='0'>選択してください</option>
                                    {this.createCategories()}
                                </select>
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='accountDescription' className='col-sm-2 col-form-label'>説明</label>
                            <div className='col-sm-10'>
                                <input type='text' name='description' className='form-control' id='accountDescription' placeholder='What?' value={this.state.description} onChange={this.handleChangeDescription} />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='accountLink' className='col-sm-2 col-form-label'>ユーザーページのURL</label>
                            <div className='col-sm-10'>
                                <input type='text' name='user_page_link' className='form-control' id='accountLink' placeholder='What?' value={this.state.user_page_link} onChange={this.handleChangeLink} />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='accountVisible' className='col-sm-2 col-form-label'>公開</label>
                            <div className='col-sm-10'>
                                <ToggleButton value={this.state.visible} onToggle={this.handleChangeVisible} />
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
