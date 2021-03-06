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
            <div className='m-3 text-center'>
                <h3>Introduction</h3>
                {introduction || 'Introduction placeholder'}
            </div>
        );
    }

}
