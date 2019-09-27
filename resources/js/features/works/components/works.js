import React from 'react';
import { List, Map, fromJS } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import SimpleCardDeck from 'src/components/cards/simple_card_deck';
import SimpleCard from '../../../components/cards/simple_card';

export default class Works extends React.Component {

    static propTypes = {
        works: ImmutablePropTypes.list,
    }

    componentWillMount() {
        if ( this.props.works === null || this.props.works === undefined ) {
            this.props.onRefresh();
        }
    }

    render() {
        const { works } = this.props;
        let cards = [];
        if (works !== undefined && works !== null) {
            works.map(row => {
                let formatted_card = {};
                let formatted_card_body = [];
                let formatted_card_foot = [];

                // <名称>
                const name = row.get('name');
                const name_obj = { type: 'title', txt: name };
                formatted_card_body.push(name_obj);
                // </名称>

                // <説明>
                let description = row.get('description');
                if (description.length > 50) {
                    description = description.slice(0, 50) + '...';
                }
                const description_obj = { type: 'txt', 'txt': description };
                formatted_card_body.push(description_obj);
                // </説明>

                // <詳細ページ>
                const id = row.get('id');
                let url_obj = {};
                url_obj = { type: 'link', txt: '詳しく', 'link': '/works/' + id };
                formatted_card_body.push(url_obj);
                // </詳細ページ>

                // <タグ>
                const tags = row.get('tags');
                tags.forEach((tag) => {
                    formatted_card_foot.push(tag.get('name'));
                });
                // </タグ>

                formatted_card.body = formatted_card_body;
                formatted_card.foot = formatted_card_foot;
                cards.push(formatted_card);
            });
        } else {
            cards.push({
                body: [
                    { type: 'txt', 'txt': 'None' },
                ],
                foot: [
                    'None',
                ],
            });
        }

        cards = fromJS(cards); // to immutable

        return (
            <div className='m-3'>
                <h3 className='text-center'>Works</h3>
                <div className='card'>
                    <div key={'main_works'} className='card-body flex-wrap' style={{ display: 'flex' }}>
                        {cards.map((card, i) => {
                            return <SimpleCard key={'work_card_' + i + '_wrap'} cid={'work_card_' + i} card={card} />;
                        })}
                    </div>
                </div>
            </div>
        );
    }

}
