import { connect } from 'react-redux';
import Accounts from 'src/features/accounts/components/accounts';
import {
    refreshAccounts,
} from 'src/actions/accounts';

const mapStateToProps = state => ({
    accounts: state.getIn(['accounts', 'accounts']),
});

const mapDispatchToProps = dispatch => ({

    onRefresh () {
        dispatch(refreshAccounts());
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Accounts);
