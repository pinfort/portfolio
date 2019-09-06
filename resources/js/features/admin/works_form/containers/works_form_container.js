import { connect } from 'react-redux';
import WorksForm from '../components/works_form';
import { addWork } from 'src/actions/admin_works';
import { showMessage } from 'src/actions/message';

const mapStateToProps = state => ({
    work_category: state.getIn(['admin_work_categories', 'work_category']),
});

const mapDispatchToProps = dispatch => ({

    onSubmit (form) {
        dispatch(addWork(form));
    },

    onError (text) {
        let message = [];
        message.text = text;
        dispatch(showMessage(message));
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WorksForm);
