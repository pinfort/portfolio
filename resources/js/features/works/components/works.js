import React from 'react';
import { List, Map, fromJS } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import SimpleCard from '../../../components/cards/simple_card';
import {Link} from "react-router-dom";

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
                // <名称>
                const name = row.get('name');
                const card_name = (<h5 key={'work_card_title'} className='card-title'>{name}</h5>);
                // </名称>

                // <説明>
                let description = row.get('description');
                if (description.length > 50) {
                    description = description.slice(0, 50) + '...';
                }
                const card_desc = (<p key={'work_card_text'} className='card-text'>{description}</p>);
                // </説明>

                // <詳細ページ>
                const id = row.get('id');
                const card_link = (<Link key={'work_card_link'} className={'btn btn-primary'} to={'/works/' + id}>{'詳しく'}</Link>);
                // </詳細ページ>

                const card_body = (
                    <div className='card-body' key={'work_card_body'}>
                        <div>
                            {card_name}
                            {card_desc}
                        </div>
                        {card_link}
                    </div>
                );
                cards.push(
                    <div className={'card mx-2 mb-3'} style={{ width: '15rem' }}>
                        {card_body}
                    </div>
                );
            });
        } else {
            cards.push(<div className={'card mx-2 mb-3'} style={{ width: '15rem' }}>
                <div className='card-body' key={'work_card_body'}>
                    <div>
                        <h5 key={'work_card_title'} className='card-title'>none</h5>
                        <p key={'work_card_text'} className='card-text'>desc</p>
                    </div>
                    <Link key={'work_card_link'} className={'btn btn-primary disabled'} to={''}>{'詳しく'}</Link>
                </div>
            </div>);
        }

        return (
            <div className='m-3'>
                <h3 className='text-center'>Works</h3>
                <div id='works-body' key={'main_works'} className='card-body flex-wrap'>
                    {cards}
                </div>
            </div>
        );
    }

}
