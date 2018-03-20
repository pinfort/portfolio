import { connect } from 'react-redux';
import Works from '../components/works';
import {
    refreshWorks,
} from 'src/actions/admin_works';

const mapStateToProps = state => ({
    works: state.getIn(['admin_works', 'works']),
});

const mapDispatchToProps = dispatch => ({

    onRefresh () {
        dispatch(refreshWorks());
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Works);
