import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import SimpleRow from './simple_row';

export default class SimpleTbody extends React.Component {

    static propTypes = {
        tid: PropTypes.string.isRequired,
        tbody: ImmutablePropTypes.list.isRequired,
    }

    render () {
        const { tid, tbody } = this.props;

        return (
            <tbody key={tid + '_body'}>
                {tbody.map((row, i) =>
                    <SimpleRow key={tid + '_body_simple_row' + i} k={tid + '_body'} row={row} row_number={i} />
                )}
            </tbody>
        );
    }

}
