import React from 'react';
import PropTypes from 'prop-types';

export default class LicensesForm extends React.Component {

    static propTypes = {
        introduction: PropTypes.string,
    }

    constructor() {
        super();
        this.state = { introduction: '' };
        this.handleChangeIntroduction = this.handleChangeIntroduction.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        if ( this.props.introduction === null || this.props.introduction === undefined ) {
            this.props.onRefresh();
        }
    }

    componentDidMount() {
        const { introduction } = this.props;
        if ( this.props.introduction === null || this.props.introduction === undefined ) {
            return;
        }

        this.setState({
            introduction: introduction,
        });
    }

    componentWillReceiveProps(nextProps) {
        const { introduction } = nextProps;

        this.setState({
            introduction: introduction,
        });
    }

    handleChangeIntroduction(event) {
        this.setState({
            introduction: event.target.value,
        });
    }

    handleSubmit(event) {
        this.props.onSubmit(this.state);
        this.setState({
            introduction: '',
        });
        event.preventDefault();
    }

    render() {
        return (
            <div className='card m-3'>
                <div className='card-header'>Edit Introduction</div>
                <div className='card-body'>
                    <form action='javascript:void(0)' onSubmit={this.handleSubmit}>
                        <div className='form-group row'>
                            <label htmlFor='introduction' className='col-sm-2 col-form-label'>自己紹介</label>
                            <div className='col-sm-10'>
                                <textarea name='introduction' rows='5' className='form-control' id='introduction' placeholder='What?' value={this.state.introduction} onChange={this.handleChangeIntroduction} />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className='col-sm-10'>
                                <button type='submit' className='btn btn-primary'>Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}
