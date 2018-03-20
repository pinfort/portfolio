import React from 'react';

export default class WorksForm extends React.Component {

    constructor() {
        super();
        this.state = {
            name: '',
            url: '',
            description: '',
            tags: '',
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeUrl = this.handleChangeUrl.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeTags = this.handleChangeTags.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({
            name: event.target.value,
        });
    }

    handleChangeUrl(event) {
        this.setState({
            url: event.target.value,
        });
    }

    handleChangeDescription(event) {
        this.setState({
            description: event.target.value,
        });
    }

    handleChangeTags(event) {
        this.setState({
            tags: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.work_category_id === '0') {
            this.props.onError('please select category');
            return;
        }
        this.props.onSubmit(this.state);
        this.setState({
            name: '',
            url: '',
            description: '',
            tags: '',
        });
    }

    render() {
        return (
            <div className='card m-3'>
                <div className='card-header'>Add Work</div>
                <div className='card-body'>
                    <form action='javascript:void(0)' onSubmit={this.handleSubmit}>
                        <div className='form-group row'>
                            <label htmlFor='getWork' className='col-sm-2 col-form-label'>プロダクト名</label>
                            <div className='col-sm-10'>
                                <input type='text' name='name' className='form-control' id='getWork' placeholder='What?' value={this.state.name} onChange={this.handleChangeName} />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='workUrl' className='col-sm-2 col-form-label'>URL</label>
                            <div className='col-sm-10'>
                                <input type='text' name='url' className='form-control' id='workUrl' placeholder='URL is?' value={this.state.url} onChange={this.handleChangeUrl} />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='workDescription' className='col-sm-2 col-form-label'>説明</label>
                            <div className='col-sm-10'>
                                <input type='text' name='description' className='form-control' id='workDescription' placeholder='description?' value={this.state.description} onChange={this.handleChangeDescription} />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='workTags' className='col-sm-2 col-form-label'>タグ</label>
                            <div className='col-sm-10'>
                                <input type='text' name='tags' className='form-control' id='workTags' placeholder='tag? separated by space' value={this.state.tags} onChange={this.handleChangeTags} />
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
