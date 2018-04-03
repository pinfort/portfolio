import { connect } from 'react-redux';
import WorkDetail from 'src/features/work_detail/components/work_detail';
import {
    refreshWorkDetail,
} from 'src/actions/work_detail';

const mapStateToProps = state => ({
    work: state.getIn(['work_detail', 'work']),
});

const mapDispatchToProps = dispatch => ({

    onRefresh (id) {
        dispatch(refreshWorkDetail(id));
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WorkDetail);
