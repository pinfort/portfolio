import React from 'react';

export default class ServicesForm extends React.Component {

    constructor() {
        super();
        this.refForm = this.refForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    refForm(c) {
        this.form = c;
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.form);
    }

    render() {
        return (
            <div className='card m-3'>
                <div className='card-header'>Add Service</div>
                <div className='card-body'>
                    <form action='javascript:void(0)' onSubmit={this.handleSubmit} ref={this.refForm}>
                        <div className='form-group row'>
                            <label htmlFor='serviceName' className='col-sm-2 col-form-label'>サービス名</label>
                            <div className='col-sm-10'>
                                <input type='text' name='name' className='form-control' id='serviceName' placeholder='What?' />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='serviceIcon' className='col-sm-2 col-form-label'>アイコン</label>
                            <div className='col-sm-10'>
                                <input type='file' name='icon' className='form-control' id='serviceIcon' />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='serviceUrl' className='col-sm-2 col-form-label'>URL</label>
                            <div className='col-sm-10'>
                                <input type='text' name='url' className='form-control' id='serviceUrl' placeholder='URL is?' />
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
