import { connect } from 'react-redux';
import TagDetail from 'src/features/tag_detail/components/tag_detail';
import {
    refreshTagDetail,
} from 'src/actions/tag_detail';

const mapStateToProps = state => ({
    tag: state.getIn(['tag_detail', 'tag']),
});

const mapDispatchToProps = dispatch => ({

    onRefresh (id) {
        dispatch(refreshTagDetail(id));
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TagDetail);
