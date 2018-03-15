import { connect } from 'react-redux';
import SkillsForm from '../components/skills_form';
import { addSkill } from 'src/actions/admin_skills';
import { refreshSkillCategories } from 'src/actions/admin_skill_categories';

const mapStateToProps = state => ({
    skill_category: state.getIn(['admin_skill_categories', 'skill_category']),
});

const mapDispatchToProps = dispatch => ({

    onRefresh () {
        dispatch(refreshSkillCategories());
    },

    onSubmit (data) {
        dispatch(addSkill(data));
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SkillsForm);
