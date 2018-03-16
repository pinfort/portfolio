import { connect } from 'react-redux';
import SkillCategories from '../components/skill_categories';
import {
    refreshSkillCategories,
} from 'src/actions/admin_skill_categories';

const mapStateToProps = state => ({
    categories: state.getIn(['admin_skill_categories', 'skill_category']),
});

const mapDispatchToProps = dispatch => ({

    onRefresh () {
        dispatch(refreshSkillCategories());
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SkillCategories);
