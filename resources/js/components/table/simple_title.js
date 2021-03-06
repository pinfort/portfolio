import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import SimpleLink from 'src/components/simple_link';

export default class SimpleTitle extends React.Component {

    static propTypes = {
        k: PropTypes.string.isRequired,
        col: ImmutablePropTypes.map.isRequired,
    }

    render () {
        const { k, col } = this.props;

        return (
            <th key={k}>
                {(() => col.get('isLink') ? <SimpleLink to={col.get('link')} content={col.get('txt')} /> : col.get('txt'))()}
            </th>
        );
    }

}
