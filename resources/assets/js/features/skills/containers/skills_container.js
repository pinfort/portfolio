import { connect } from 'react-redux';
import Skills from 'src/features/skills/components/skills';
import {
    refreshSkills,
} from 'src/actions/skills';

const mapStateToProps = state => ({
    content: state.getIn(['skills', 'content']),
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
