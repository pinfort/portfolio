import { connect } from 'react-redux';
import IntroductionForm from '../components/introduction_form';
import {
    updateIntroduction,
    refreshIntroduction,
} from 'src/actions/admin_introduction';

const mapStateToProps = state => ({
    introduction: state.getIn(['admin_introduction', 'introduction']),
});

const mapDispatchToProps = dispatch => ({

    onRefresh () {
        dispatch(refreshIntroduction());
    },

    onSubmit (data) {
        dispatch(updateIntroduction(data));
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(IntroductionForm);
