import { connect } from 'react-redux';
import SkillCategoriesForm from '../components/skill_categories_form';
import { addSkillCategory } from 'src/actions/admin_skill_categories';
import { refreshSkillCategories } from 'src/actions/admin_skill_categories';

const mapStateToProps = state => ({
    skill_category: state.getIn(['admin_skill_categories', 'skill_category']),
});

const mapDispatchToProps = dispatch => ({

    onRefresh () {
        dispatch(refreshSkillCategories());
    },

    onSubmit (data) {
        dispatch(addSkillCategory(data));
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SkillCategoriesForm);
