import { connect } from 'react-redux';
import Skills from '../components/skills';
import {
    refreshSkills,
} from 'src/actions/admin_skills';

const mapStateToProps = state => ({
    skills: state.getIn(['admin_skills', 'skills']),
});

const mapDispatchToProps = dispatch => ({

    onRefresh () {
        dispatch(refreshSkills());
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Skills);
