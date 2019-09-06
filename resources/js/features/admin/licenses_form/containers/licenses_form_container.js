import { connect } from 'react-redux';
import LicensesForm from '../components/licenses_form';
import { addLicense } from 'src/actions/admin_licenses';

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => ({

    onSubmit (data) {
        dispatch(addLicense(data));
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LicensesForm);
