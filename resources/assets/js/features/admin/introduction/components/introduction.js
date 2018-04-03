import React from 'react';
import PropTypes from 'prop-types';

export default class Introduction extends React.Component {

    static propTypes = {
        introduction: PropTypes.string,
    }

    componentWillMount() {
        if ( this.props.introduction === null || this.props.introduction === undefined ) {
            this.props.onRefresh();
        }
    }

    render() {
        const { introduction } = this.props;

        return (
            <div className='card m-3'>
                <div className='card-header'>Introduction</div>
                <div className='card-body'>
                    {introduction}
                </div>
            </div>
        );
    }

}
