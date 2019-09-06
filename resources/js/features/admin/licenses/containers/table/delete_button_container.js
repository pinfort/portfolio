import { connect } from 'react-redux';
import DeleteButton from '../../components/table/delete_button';
import { deleteLicense } from 'src/actions/admin_licenses';

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => ({

    onDelete (id) {
        dispatch(deleteLicense(id));
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DeleteButton);
