import React from 'react';
import PropTypes from 'prop-types';

export default class SimpleLine extends React.Component {

    static propTypes = {
        k: PropTypes.string.isRequired,
        content: PropTypes.any.isRequired,
    }

    render () {
        const { k, content } = this.props;

        return (
            <li className='list-group-item' key={k}>
                {content}
            </li>
        );
    }

}
