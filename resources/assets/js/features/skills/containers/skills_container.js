import { connect } from 'react-redux';
import Skills from 'src/features/skills/components/skills';
import {
    refreshSkills,
} from 'src/actions/skills';

const mapStateToProps = state => ({
    skills: state.getIn(['skills', 'skills']),
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
