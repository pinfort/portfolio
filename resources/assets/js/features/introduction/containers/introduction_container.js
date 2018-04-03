import { connect } from 'react-redux';
import Introduction from 'src/features/introduction/components/introduction';
import {
    refreshIntroduction,
} from 'src/actions/introduction';

const mapStateToProps = state => ({
    introduction: state.getIn(['introduction', 'introduction']),
});

const mapDispatchToProps = dispatch => ({

    onRefresh () {
        dispatch(refreshIntroduction());
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Introduction);
