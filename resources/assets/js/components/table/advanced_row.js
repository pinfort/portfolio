import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import AdvancedColumn from './advanced_column';

export default class AdvancedRow extends React.Component {

    static propTypes = {
        k: PropTypes.string.isRequired,
        row_number: PropTypes.number.isRequired,
        row: ImmutablePropTypes.list.isRequired,
    }

    createColumn(col, i, k) {
        return <AdvancedColumn key={k + '_advanced_column_' + i} k={k + '_advanced_column_td_' + i} content={col} />;
    }

    render () {
        const { k, row_number, row } = this.props;

        return (
            <tr key={k + '_row_' + row_number}>
                {row.map((col, i) =>
                    this.createColumn(col, i, k)
                )}
            </tr>
        );
    }

}
