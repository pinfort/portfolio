import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import SimpleRow from './simple_row';

export default class SimpleThead extends React.Component {

    static propTypes = {
        tid: PropTypes.string.isRequired,
        thead: ImmutablePropTypes.list.isRequired,
    }

    render () {
        const { tid, thead } = this.props;

        return (
            <thead key={tid + '_head'}>
                {thead.map((row, i) =>
                    <SimpleRow key={tid + '_head_simple_row' + i} k={tid + '_head'} row={row} row_number={i} />
                )}
            </thead>
        );
    }

}

