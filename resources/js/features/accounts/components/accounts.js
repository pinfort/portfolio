import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import getFaClassName from '../../../utils/fontawesome_classname_factory';

export default class Accounts extends React.Component {

    static propTypes = {
        accounts: ImmutablePropTypes.list,
    }

    componentWillMount() {
        if ( this.props.accounts === null || this.props.accounts === undefined ) {
            this.props.onRefresh();
        }
    }

    render() {
        const { accounts } = this.props;
        let account_objs = [];
        if (accounts !== undefined && accounts !== null) {
            accounts.map(row => {

                // <サービスアイコン>
                const service_fa_name = row.get('service').get('icon');
                const service_fa_obj = (<div className='account-item-icon'>
                    <i className={'fa-2x ' + getFaClassName(service_fa_name)} />
                </div>);
                //</サービスアイコン>

                // <サービス名>
                const service_name = row.get('service').get('name');
                const service_name_obj = <div key={'service_name'}>{service_name}</div>;
                // </サービス名>

                // <ユーザー名>
                const name = row.get('user_name');
                const name_obj = <div key={'user_name'} className='account-item-username'>{name}</div>;
                // </ユーザー名>

                // <レイアウト>
                const account_obj = (
                    <li className='account-item mb-2' key={'account_' + row.get('service').get('name') + '_' + row.get('user_name')}>
                        <a href={row.get('user_page_link')}>
                            {service_fa_obj}
                            <div>
                                {service_name_obj}
                                {name_obj}
                            </div>
                        </a>
                    </li>);
                // </レイアウト>

                account_objs.push(account_obj);
            });
        }

        if (account_objs.length === 0) {
            account_objs.push(
                <li className='account-item mb-2' key={'account_item'}>
                    <a href={'https://example.com'}>
                        <div className='account-item-icon'>
                            <i className={'fa-2x ' + getFaClassName('twitter')} />
                        </div>
                        <div>
                            <div key={'service_name'}>Twitter</div>
                            <div key={'user_name'} className='account-item-username'>test_user</div>
                        </div>
                    </a>
                </li>
            );
        }

        return (
            <div key={'main_accounts'} className='mx-3'>
                <h3 className='text-center'>Accounts</h3>
                <ul className='account-list'>
                    {account_objs}
                </ul>
            </div>
        );
    }

}
