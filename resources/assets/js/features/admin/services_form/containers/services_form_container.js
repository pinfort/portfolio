import { connect } from 'react-redux';
import ServicesForm from '../components/services_form';
import { addService } from 'src/actions/admin_services';

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => ({

    onSubmit (form) {
        dispatch(addService(form));
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ServicesForm);
