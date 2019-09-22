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
                const service_fa_obj = <span><i className={'service-icon-img ' + getFaClassName(service_fa_name)} /></span>;
                //</サービスアイコン>

                // <サービス名>
                const service_name = row.get('service').get('name');
                const service_name_obj = <div>{service_name}</div>;
                // </サービス名>

                // <ユーザー名>
                const name = row.get('user_name');
                const name_obj = <div>{name}</div>;
                // </ユーザー名>

                // <レイアウト>
                const account_obj = (
                    <a href={row.get('user_page_link')}>
                        <div>
                            {service_fa_obj}
                            <span>
                                {service_name_obj}
                                {name_obj}
                            </span>
                        </div>
                    </a>);
                // </レイアウト>

                account_objs.push(account_obj);
            });
        }

        if (account_objs.length === 0) {
            account_objs.push(
                <li style={{ flexBasis: '50%', display: 'flex', height: '50px' }}>
                    <a href={'https://example.com'} style={{ display: 'flex', color: 'inherit', width: '100%' }}>
                        <div style={{ minWidth: '40px', margin: 'auto 0px' }}>
                            <i className={'fa-2x ' + getFaClassName('twitter')} />
                        </div>
                        <div style={{ margin: 'auto 0px' }}>
                            <div key={'service_name'}>Twitter</div>
                            <div key={'user_name'} style={{ color: 'gray' }}>test_user</div>
                        </div>
                    </a>
                </li>
            );
        }

        return (
            <div key={'main_accounts'} className='mx-3'>
                <h3 className='text-center'>Accounts</h3>
                <ul style={{ display: 'flex', listStyle: 'none', padding: '0', flexWrap: 'wrap' }}>
                    {account_objs}
                </ul>
            </div>
        );
    }

}
