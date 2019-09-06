import { connect } from 'react-redux';
import DeleteButton from '../../components/table/delete_button';
import { deleteSkillCategory } from 'src/actions/admin_skill_categories';

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => ({

    onDelete (id) {
        dispatch(deleteSkillCategory(id));
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DeleteButton);
