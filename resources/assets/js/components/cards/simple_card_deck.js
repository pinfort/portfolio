import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import SimpleCard from './simple_card';

export default class SimpleCardDeck extends React.Component {

    static propTypes = {
        cid: PropTypes.string.isRequired,
        cards: ImmutablePropTypes.list.isRequired,
    }

    render () {
        const { cid, cards } = this.props;
        return (
            <div key={cid + '_card_deck'} className='card-deck flex-nowrap'>
                {cards.map((card, i) => {
                    return <SimpleCard key={cid + '_card_' + i + '_wrap'} cid={cid + '_card_' + i} card={card} />;
                })}
            </div>
        );
    }

}