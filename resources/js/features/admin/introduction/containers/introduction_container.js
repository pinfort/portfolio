import { connect } from 'react-redux';
import Introduction from '../components/introduction';
import {
    refreshIntroduction,
} from 'src/actions/admin_introduction';

const mapStateToProps = state => ({
    introduction: state.getIn(['admin_introduction', 'introduction']),
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
