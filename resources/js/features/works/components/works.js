import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Link } from 'react-router-dom';

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
                const card_name = (<h4 key={'work_card_title'} className='card-title'>{name}</h4>);
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
                // </詳細ページ>

                const card_body = (
                    <Link key={'work_card_link'} to={'/works/' + id}>
                        <div className='card-body' key={'work_card_body'}>
                            {card_name}
                            {card_desc}
                        </div>
                    </Link>
                );
                cards.push(
                    <div className={'card mx-2 mb-3'} style={{ width: '15rem' }}>
                        {card_body}
                    </div>
                );
            });
        } else {
            cards.push(<div className={'card mx-2 mb-3'} style={{ width: '15rem' }}>
                <Link key={'work_card_link'} to={''}>
                    <div className='card-body' key={'work_card_body'}>
                        <h4 key={'work_card_title'} className='card-title'>none</h4>
                        <p key={'work_card_text'} className='card-text'>desc</p>
                    </div>
                </Link>
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
