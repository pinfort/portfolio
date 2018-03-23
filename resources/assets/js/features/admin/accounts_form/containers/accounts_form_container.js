import { connect } from 'react-redux';
import AccountsForm from '../components/accounts_form';
import { addAccount } from 'src/actions/admin_accounts';
import { showMessage } from 'src/actions/message';
import { refreshServices } from 'src/actions/admin_services';

const mapStateToProps = state => ({
    services: state.getIn(['admin_services', 'services']),
});

const mapDispatchToProps = dispatch => ({

    onRefresh () {
        dispatch(refreshServices());
    },

    onSubmit (data) {
        dispatch(addAccount(data));
    },

    onError (text) {
        let message = [];
        message.text = text;
        dispatch(showMessage(message));
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AccountsForm);
