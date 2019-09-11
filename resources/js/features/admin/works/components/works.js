import React from 'react';
import { List, Map, fromJS } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import WorksTable from './table/works_table';

export default class Works extends React.Component {

    static propTypes = {
        works: ImmutablePropTypes.list,
    }

    componentWillMount() {
        if ( this.props.works === null || this.props.works === undefined ) {
            this.props.onRefresh();
        }
    }

    thead = List.of(
        List.of(
            Map({ 'isTitle': true, 'isLink': false, 'txt': '名称' }),
            Map({ 'isTitle': true, 'isLink': false, 'txt': 'URL' }),
            Map({ 'isTitle': true, 'isLink': false, 'txt': '説明' }),
            Map({ 'isTitle': true, 'isLink': false, 'txt': 'タグ' }),
            Map({ 'isTitle': true, 'isLink': false, 'txt': '削除' }),
        )
    );

    render() {
        const { works } = this.props;
        let tbody = [];
        if (works !== undefined && works !== null) {
            works.map(row => {
                let formatted_row = [];

                // <1カラム目: 名称>
                const name = row.get('name');
                const name_obj = { type: 'txt', 'isLink': false, 'txt': name };
                formatted_row.push(name_obj);
                // </1カラム目: 名称>

                // <2カラム目: URL>
                const url = row.get('url');
                let url_obj = {};
                if (url === '') {
                    url_obj = { type: 'txt', 'isLink': false, 'txt': '非公開' };
                } else {
                    url_obj = { type: 'txt', 'isLink': true, 'txt': 'here', 'link': url };
                }
                formatted_row.push(url_obj);
                // </2カラム目: URL>

                // <3カラム目: 説明>
                const description = row.get('description');
                const description_obj = { type: 'txt', 'isLink': false, 'txt': description };
                formatted_row.push(description_obj);
                // </3カラム目: 説明>

                // <4カラム目: タグ>
                const tags = row.get('tags');
                let tags_str = '';
                tags.forEach((tag) => {
                    tags_str += ' ' + tag.get('name');
                });
                const tags_obj = { type: 'txt', 'isLink': false, 'txt': tags_str.trim() };
                formatted_row.push(tags_obj);
                // </4カラム目: タグ>

                // <5カラム目: 削除ボタン>
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
                // </5カラム目: 削除ボタン>

                // 行を追加
                tbody.push(formatted_row);
            });

            // 何もない時に表示するやつ
            if (works.size === 0) {
                tbody.push([
                    { type: 'txt', isLink: false, txt: 'None' },
                    { type: 'txt', isLink: false, txt: 'None' },
                    { type: 'txt', isLink: false, txt: 'None' },
                    { type: 'txt', isLink: false, txt: 'None' },
                    { type: 'txt', isLink: false, txt: 'x' },
                ]);
            }
        }

        tbody = fromJS(tbody); // to immutable

        return (
            <div className='card m-3'>
                <div key={'main_works'} className='card-body'>
                    <WorksTable tid='works_table' tclass='table table-hover' thead={this.thead} tbody={tbody} />
                </div>
            </div>
        );
    }

}
