import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';

export default class AdvancedColumn extends React.Component {

    static propTypes = {
        k: PropTypes.string.isRequired,
        content: PropTypes.any.isRequired,
    }

    render () {
        const { k, content } = this.props;

        return (
            <td key={k}>
                {content}
            </td>
        );
    }

}
