import { connect } from 'react-redux';
import VisibleButton from '../../components/table/visible_button';
import { visibleAccount, invisibleAccount } from 'src/actions/admin_accounts';

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => ({

    onVisible (id) {
        dispatch(visibleAccount(id));
    },

    onInvisible (id) {
        dispatch(invisibleAccount(id));
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(VisibleButton);
