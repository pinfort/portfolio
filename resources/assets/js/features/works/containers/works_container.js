import { connect } from 'react-redux';
import Works from 'src/features/works/components/works';
import {
    refreshWorks,
} from 'src/actions/works';

const mapStateToProps = state => ({
    works: state.getIn(['works', 'works']),
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
