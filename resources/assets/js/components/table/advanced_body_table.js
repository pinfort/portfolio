import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import SimpleThead from './simple_thead';
import AdvancedTbody from './advanced_tbody';

export default class AdvancedBodyTable extends React.Component {

    static propTypes = {
        tid: PropTypes.string.isRequired,
        tclass: PropTypes.string.isRequired,
        thead: ImmutablePropTypes.list.isRequired,
        tbody: ImmutablePropTypes.list.isRequired,
    }

    render () {
        const { tid, tclass, thead, tbody } = this.props;

        return (
            <table id={tid} key={tid} className={tclass || ''}>
                <SimpleThead tid={tid} thead={thead} />
                <AdvancedTbody tid={tid} tbody={tbody} />
            </table>
        );
    }

}
