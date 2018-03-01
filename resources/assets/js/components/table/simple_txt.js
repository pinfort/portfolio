import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';

export default class SimpleTxt extends React.Component {

    static propTypes = {
        k: PropTypes.number.isRequired,
        col: ImmutablePropTypes.map.isRequired,
    }

    render () {
        const { k, col } = this.props;

        return (
            <td key={k}>
                {(() => col.get('isLink') ? <a href={col.get('link')}>{col.get('txt')}</a> : col.get('txt'))()}
            </td>
        );
    }

}
