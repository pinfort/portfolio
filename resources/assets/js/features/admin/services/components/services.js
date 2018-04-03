import React from 'react';
import { List, Map, fromJS } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ServicesTable from './table/services_table';

export default class Services extends React.Component {

    static propTypes = {
        services: ImmutablePropTypes.list,
    }

    componentWillMount() {
        if ( this.props.services === null || this.props.services === undefined ) {
            this.props.onRefresh();
        }
    }

    thead = List.of(
        List.of(
            Map({ 'isTitle': true, 'isLink': false, 'txt': 'アイコン' }),
            Map({ 'isTitle': true, 'isLink': false, 'txt': '名称' }),
            Map({ 'isTitle': true, 'isLink': false, 'txt': '削除' }),
        )
    );

    render() {
        const { services } = this.props;
        let tbody = [];
        if (services === undefined || services === null) {
            tbody.push([]);
        } else {
            services.map(row => {
                let formatted_row = [];

                // <1カラム目: アイコン>
                const icon_url = row.get('icon_url');
                const get_at_obj = {
                    type: 'image',
                    src: icon_url,
                    alt: row.get('name'),
                    class: 'service-img',
                };
                formatted_row.push(get_at_obj);
                // </1カラム目: アイコン>

                // <2カラム目: サービス名>
                const name = row.get('name');
                const url = row.get('url');
                const name_obj = {
                    type: 'txt',
                    isLink: true,
                    txt: name,
                    link: url,
                };
                formatted_row.push(name_obj);
                // </2カラム目: サービス名>

                // <3カラム目: 削除ボタン>
                const del_btn = {
                    type: 'button',
                    className: 'btn btn-light',
                    children: {
                        type: 'font_awesome',
                        className: 'fa fa-times',
                    },
                    target_id: row.get('id'),
                };
                formatted_row.push(del_btn);
                // </3カラム目: 削除ボタン>

                // 行を追加
                tbody.push(formatted_row);
            });

            // 何もない時に表示するやつ
            if (services.size === 0) {
                tbody.push([
                    {
                        type: 'txt',
                        isLink: false,
                        txt: 'None',
                    },
                    {
                        type: 'txt',
                        isLink: false,
                        txt: 'None',
                    },
                    {
                        type: 'txt',
                        isLink: false,
                        txt: 'x',
                    },
                ]);
            }
        }
        tbody = fromJS(tbody); // to immutable

        return (
            <div className='card m-3'>
                <div className='card-header'>Services</div>
                <div className='card-body'>
                    <ServicesTable tid='services_table' tclass='table table-hover' thead={this.thead} tbody={tbody} />
                </div>
            </div>
        );
    }

}
