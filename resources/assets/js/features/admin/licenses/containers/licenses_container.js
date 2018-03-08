import { connect } from 'react-redux';
import Licenses from '../components/licenses';
import {
    refreshLicenses,
} from 'src/actions/admin/licenses';

const mapStateToProps = state => ({
    table: state.getIn(['admin_licenses', 'table']),
});

const mapDispatchToProps = dispatch => ({

    onRefresh () {
        dispatch(refreshLicenses());
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Licenses);
