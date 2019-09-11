import React from 'react';
import { List, Map, fromJS } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import SimpleTable from 'src/components/table/simple_table';
import SimpleList from 'src/components/list/simple_list';
import getFaClassName from "../../../utils/fontawesome_classname_factory";

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
        )
    );

    render() {
        const { accounts } = this.props;
        let services = {};
        let service_meta = {};
        if (accounts !== undefined && accounts !== null) {
            accounts.map(row => {
                let formatted_row = [];

                // <1カラム目: 名称>
                const name = row.get('user_name');
                const name_obj = { type: 'txt', 'isLink': true, 'isExternal': true, 'txt': name, link: row.get('user_page_link') };
                formatted_row.push(name_obj);
                // </1カラム目: 名称>

                // <2カラム目: 説明>
                const description = row.get('description');
                const description_obj = { type: 'txt', 'isLink': false, 'txt': description };
                formatted_row.push(description_obj);
                // </2カラム目: 説明>

                // 該当するカテゴリに行を追加
                let service_name = row.get('service').get('name');
                if (services[service_name] === undefined || services[service_name] === null) {
                    services[service_name] = [];
                }
                services[service_name].push(formatted_row);

                if (service_meta[service_name] === undefined || service_meta[service_name] === null) {
                    service_meta[service_name] = row.get('service');
                }
            });

            // 何もない時に表示するやつ
            if (accounts.size === 0) {
                services.nothing = [];
                services.nothing.push([
                    { 'isTitle': false, 'isLink': false, 'isExternal': false, 'txt': 'None' },
                    { 'isTitle': false, 'isLink': false, 'isExternal': false, 'txt': 'None' },
                ]);

                if (service_meta['nothing'] === undefined || service_meta['service_name'] === null) {
                    service_meta['nothing'] = fromJS({
                        'id':2,
                        'name':'Twitter',
                        'url':'https:\/\/twitter.com',
                        'icon_path':'public\/services\/cgGdziMGtT9faKZbwb2Fb9Mk7SF85aTrU6jLqKo8.png',
                        'created_at':'2018-04-05 16:31:00',
                        'updated_at':'2018-04-05 16:31:00',
                        'icon':'twitter',
                    });
                }
            }
        }

        services = fromJS(services); // to immutable
        let lists = [];

        services.entrySeq().forEach(e => (
            lists.push(
                <span className='p-1' key={'accounts_list_' + e[0] + '_wrap'}>
                    <SimpleList
                        list_id={'accounts_list_' + e[0]}
                        contents={
                            List([
                                <span><i className={'service-icon-img ' + getFaClassName(service_meta[e[0]].get('icon'))} />{e[0]}</span>,
                                <SimpleTable key={'accounts_' + e[0] + '_table_wrap'} tid={'accounts_' + e[0] + '_table'} tclass='table table-hover' thead={this.thead} tbody={e[1]} />,
                            ])
                        }
                    />
                </span>
            )
        ));

        return (
            <div key={'main_accounts'} className='mx-3'>
                {lists}
            </div>
        );
    }

}
