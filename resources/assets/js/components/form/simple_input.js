import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';

export default class SimpleInput extends React.Component {

    static propTypes = {
        k: PropTypes.string.isRequired,
        content: ImmutablePropTypes.map.isRequired,
    }

    render () {
        const { k, content } = this.props;

        return (
            <input key={k} type={content.get('partsType')} className={content.get('className')} name={content.get('name')} value={content.get('value')} />
        );
    }

}
