import { connect } from 'react-redux';
import DeleteButton from '../../components/table/delete_button';
import { deleteAccount } from 'src/actions/admin_accounts';

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => ({

    onDelete (id) {
        dispatch(deleteAccount(id));
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DeleteButton);
