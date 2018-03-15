import React from 'react';

export default class LicensesForm extends React.Component {

    constructor() {
        super();
        this.state = { get_at: '', name: '' };
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeDate(event) {
        this.setState({
            get_at: event.target.value,
        });
    }

    handleChangeName(event) {
        this.setState({
            name: event.target.value,
        });
    }

    handleSubmit(event) {
        this.props.onSubmit(this.state);
        this.setState({
            get_at: '',
            name: '',
        });
        event.preventDefault();
    }

    render() {
        return (
            <div className='card m-3'>
                <div className='card-header'>Add License</div>
                <div className='card-body'>
                    <form action='javascript:void(0)' onSubmit={this.handleSubmit}>
                        <div className='form-group row'>
                            <label htmlFor='getDate' className='col-sm-2 col-form-label'>取得年月</label>
                            <div className='col-sm-10'>
                                <input type='number' name='get_at' min={100000} max={999999} className='form-control' id='getDate' placeholder='When? (yyyyMM)' value={this.state.get_at} onChange={this.handleChangeDate} />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='getLicense' className='col-sm-2 col-form-label'>資格名</label>
                            <div className='col-sm-10'>
                                <input type='text' name='name' className='form-control' id='getLicense' placeholder='What?' value={this.state.name} onChange={this.handleChangeName} />
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
