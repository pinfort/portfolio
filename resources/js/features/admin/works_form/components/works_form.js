import React from 'react';

export default class WorksForm extends React.Component {

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
                <div className='card-header'>Add Work</div>
                <div className='card-body'>
                    <form action='javascript:void(0)' onSubmit={this.handleSubmit} ref={this.refForm}>
                        <div className='form-group row'>
                            <label htmlFor='getWork' className='col-sm-2 col-form-label'>プロダクト名</label>
                            <div className='col-sm-10'>
                                <input type='text' name='name' className='form-control' id='getWork' placeholder='What?' />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='workUrl' className='col-sm-2 col-form-label'>URL</label>
                            <div className='col-sm-10'>
                                <input type='text' name='url' className='form-control' id='workUrl' placeholder='URL is?' />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='workImage' className='col-sm-2 col-form-label'>画像</label>
                            <div className='col-sm-10'>
                                <input type='file' name='image' className='form-control' id='workForm' />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='workDescription' className='col-sm-2 col-form-label'>説明</label>
                            <div className='col-sm-10'>
                                <textarea name='description' className='form-control' id='workDescription' placeholder='description?' />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='workTags' className='col-sm-2 col-form-label'>タグ</label>
                            <div className='col-sm-10'>
                                <input type='text' name='tags' className='form-control' id='workTags' placeholder='tag? separated by space' />
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
