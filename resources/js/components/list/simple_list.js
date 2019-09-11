import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import SimpleLine from './simple_line';

export default class SimpleList extends React.Component {

    static propTypes = {
        list_id: PropTypes.string.isRequired,
        contents: ImmutablePropTypes.list.isRequired,
        l_class: PropTypes.string,
    }

    render () {
        const { list_id, contents, l_class } = this.props;

        return (
            <ul id={list_id} className={'list-group ' + (l_class || '')} key={list_id}>
                {contents.map((content, i) =>
                    <SimpleLine key={list_id + '_simple_line_' + i} k={list_id + '_simple_line_li_' + i} content={content} />
                )}
            </ul>
        );
    }

}
