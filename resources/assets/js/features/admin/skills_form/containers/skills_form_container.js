import { connect } from 'react-redux';
import SkillsForm from '../components/skills_form';
import { addSkill } from 'src/actions/admin_skills';
import { showMessage } from 'src/actions/message';
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

    onError (text) {
        let message = [];
        message.text = text;
        dispatch(showMessage(message));
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SkillsForm);
