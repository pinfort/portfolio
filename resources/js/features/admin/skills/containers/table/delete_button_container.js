import { connect } from 'react-redux';
import DeleteButton from '../../components/table/delete_button';
import { deleteSkill } from 'src/actions/admin_skills';

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => ({

    onDelete (id) {
        dispatch(deleteSkill(id));
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DeleteButton);
