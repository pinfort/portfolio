import React from 'react';
import { List, Map, fromJS } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import AccountsTable from './table/accounts_table';
import SimpleList from 'src/components/list/simple_list';

export default class Accounts extends React.Component {

    static propTypes = {
        accounts: ImmutablePropTypes.list,
    }

    componentWillMount() {
        if ( this.props.accounts === null || this.props.accounts === undefined ) {
            this.props.onRefresh();
        }
    }

    thead = List.of(
        List.of(
            Map({ 'isTitle': true, 'isLink': false, 'txt': 'アカウント名' }),
            Map({ 'isTitle': true, 'isLink': false, 'txt': '説明' }),
            Map({ 'isTitle': true, 'isLink': false, 'txt': '公開' }),
            Map({ 'isTitle': true, 'isLink': false, 'txt': '削除' }),
        )
    );

    render() {
        const { accounts } = this.props;
        let services = {};
        if (accounts !== undefined && accounts !== null) {
            accounts.map(row => {
                let formatted_row = [];

                // <1カラム目: 名称>
                const name = row.get('user_name');
                const name_obj = { type: 'txt', 'isLink': true, 'txt': name, link: row.get('user_page_link') };
                formatted_row.push(name_obj);
                // </1カラム目: 名称>

                // <2カラム目: 説明>
                const description = row.get('description');
                const description_obj = { type: 'txt', 'isLink': false, 'txt': description };
                formatted_row.push(description_obj);
                // </2カラム目: 説明>

                // <3カラム目: 公開ボタン>
                const vis_btn = {
                    type: 'button',
                    button_type: 'visible',
                    visible: Boolean(row.get('visible')),
                    target_id: row.get('id'),
                };
                formatted_row.push(vis_btn);
                // </3カラム目: 公開ボタン>

                // <4カラム目: 削除ボタン>
                const del_btn = {
                    type: 'button',
                    button_type: 'delete',
                    className: 'btn btn-light',
                    children: {
                        type: 'font_awesome',
                        className: 'fas fa-times',
                    },
                    target_id: row.get('id'),
                };
                formatted_row.push(del_btn);
                // </4カラム目: 削除ボタン>

                // 該当するサービスに行を追加
                let service_name = row.get('service').get('name');
                if (services[service_name] === undefined || services[service_name] === null) {
                    services[service_name] = [];
                }
                services[service_name].push(formatted_row);
            });

            // 何もない時に表示するやつ
            if (accounts.size === 0) {
                services.nothing = [];
                services.nothing.push([
                    { type: 'txt', isLink: false, txt: 'None' },
                    { type: 'txt', isLink: false, txt: 'None' },
                    { type: 'txt', isLink: false, txt: 'x' },
                    { type: 'txt', isLink: false, txt: 'x' },
                ]);
            }
        }

        services = fromJS(services); // to immutable

        let lists = [];

        services.entrySeq().forEach(e => (
            lists.push(<SimpleList
                key={'accounts_list_' + e[0] + '_wrap'}
                list_id={'accounts_list_' + e[0]}
                contents={
                    List([
                        e[0],
                        <AccountsTable key={'accounts_' + e[0] + '_table_wrap'} tid={'accounts_' + e[0] + '_table'} tclass='table table-hover' thead={this.thead} tbody={e[1]} />,
                    ])
                }
                l_class='my-1'
            />)
        ));

        return (
            <div key={'main_accounts'} className='mx-3'>
                {lists}
            </div>
        );
    }

}
