import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import SimpleThead from './simple_thead';
import AdvancedTbody from './advanced_tbody';

export default class AdvancedTable extends React.Component {

    static propTypes = {
        tid: PropTypes.string.isRequired,
        tclass: PropTypes.string.isRequired,
        thead: ImmutablePropTypes.list.isRequired,
        tbody: ImmutablePropTypes.list.isRequired,
    }

    createThead(tid, content) {
        return <SimpleThead tid={tid} thead={content} />;
    }

    createTbody(tid, content) {
        return <AdvancedTbody tid={tid} tbody={content} />;
    }

    render () {
        const { tid, tclass, thead, tbody } = this.props;

        return (
            <table id={tid} key={tid} className={tclass || ''}>
                {this.createThead(tid, thead)}
                {this.createTbody(tid, tbody)}
            </table>
        );
    }

}
