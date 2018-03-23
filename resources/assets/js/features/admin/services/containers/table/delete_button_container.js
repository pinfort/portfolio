import { connect } from 'react-redux';
import DeleteButton from '../../components/table/delete_button';
import { deleteService } from 'src/actions/admin_services';

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => ({

    onDelete (id) {
        dispatch(deleteService(id));
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DeleteButton);
