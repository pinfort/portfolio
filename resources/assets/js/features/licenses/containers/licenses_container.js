import { connect } from 'react-redux';
import Licenses from 'src/features/licenses/components/licenses';
import {
    refreshLicenses,
} from 'src/actions/licenses';

const mapDispatchToProps = dispatch => ({

    onRefresh () {
        dispatch(refreshLicenses());
    },

});

export default connect(
    mapDispatchToProps,
)(Licenses);
