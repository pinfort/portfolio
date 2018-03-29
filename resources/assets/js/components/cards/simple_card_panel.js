import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import SimpleCard from './simple_card';

export default class SimpleCardPanel extends React.Component {

    static propTypes = {
        cid: PropTypes.string.isRequired,
        cards: ImmutablePropTypes.list.isRequired,
    }

    render () {
        const { cid, cards } = this.props;
        return (
            <div id='simple_card_panel' key={cid + '_card_panel'} className='card-deck'>
                {cards.map((card, i) => {
                    return <SimpleCard key={cid + '_card_' + i + '_wrap'} cid={cid + '_card_' + i} card={card} className='m-2' />;
                })}
            </div>
        );
    }

}
