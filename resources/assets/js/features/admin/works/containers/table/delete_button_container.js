import { connect } from 'react-redux';
import DeleteButton from '../../components/table/delete_button';
import { deleteWork } from 'src/actions/admin_works';

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => ({

    onDelete (id) {
        dispatch(deleteWork(id));
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DeleteButton);
