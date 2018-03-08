import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';

export default class SimpleTitle extends React.Component {

    static propTypes = {
        k: PropTypes.string.isRequired,
        col: ImmutablePropTypes.map.isRequired,
    }

    render () {
        const { k, col } = this.props;

        return (
            <th key={k}>
                {(() => col.get('isLink') ? <a href={col.get('link')}>{col.get('txt')}</a> : col.get('txt'))()}
            </th>
        );
    }

}
