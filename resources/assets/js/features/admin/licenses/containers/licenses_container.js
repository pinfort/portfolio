import { connect } from 'react-redux';
import Licenses from '../components/licenses';
import {
    refreshLicenses,
    deleteLicense,
} from 'src/actions/admin_licenses';

const mapStateToProps = state => ({
    table: state.getIn(['admin_licenses', 'table']),
});

const mapDispatchToProps = dispatch => ({

    onRefresh () {
        dispatch(refreshLicenses());
    },

    onDelete (id) {
        dispatch(deleteLicense(id));
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Licenses);
