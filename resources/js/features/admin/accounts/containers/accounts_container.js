import { connect } from 'react-redux';
import Accounts from '../components/accounts';
import {
    refreshAccounts,
    deleteAccount,
} from 'src/actions/admin_accounts';

const mapStateToProps = state => ({
    accounts: state.getIn(['admin_accounts', 'accounts']),
});

const mapDispatchToProps = dispatch => ({

    onRefresh () {
        dispatch(refreshAccounts());
    },

    onDelete (id) {
        dispatch(deleteAccount(id));
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Accounts);
