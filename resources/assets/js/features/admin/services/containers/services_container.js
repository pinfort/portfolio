import { connect } from 'react-redux';
import Services from '../components/services';
import {
    refreshServices,
    deleteService,
} from 'src/actions/admin_services';

const mapStateToProps = state => ({
    services: state.getIn(['admin_services', 'services']),
});

const mapDispatchToProps = dispatch => ({

    onRefresh () {
        dispatch(refreshServices());
    },

    onDelete (id) {
        dispatch(deleteService(id));
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Services);
