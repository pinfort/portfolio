import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import SimpleTxt from './simple_txt';
import SimpleTitle from './simple_title';

export default class SimpleRow extends React.Component {

    static propTypes = {
        k: PropTypes.string.isRequired,
        row_number: PropTypes.number.isRequired,
        row: ImmutablePropTypes.list.isRequired,
    }

    render () {
        const { k, row_number, row } = this.props;

        return (
            <tr key={k + '_row_' + row_number}>
                {row.map((col, k) => {
                    if (col.isTitle) {
                        return <SimpleTitle key={k + '_simple_title'} k={k} col={col} />;
                    } else {
                        return <SimpleTxt key={k + '_simple_txt'} k={k} col={col} />;
                    }
                })}
            </tr>
        );
    }

}
