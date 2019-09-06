import {
    ADMIN_SERVICES_REFRESH_REQUEST,
    ADMIN_SERVICES_REFRESH_SUCCESS,
    ADMIN_SERVICES_REFRESH_FAIL,
    ADMIN_SERVICE_DELETE_REQUEST,
    ADMIN_SERVICE_DELETE_SUCCESS,
    ADMIN_SERVICE_DELETE_FAIL,
    ADMIN_SERVICE_ADD_REQUEST,
    ADMIN_SERVICE_ADD_SUCCESS,
    ADMIN_SERVICE_ADD_FAIL,
} from 'src/actions/admin_services';
import { Map, fromJS } from 'immutable';

function normalizeServices(state, serviceList) {
    return state.set('services', fromJS(serviceList));
}

function deleteService(state, serviceId) {
    let newState = [];
    state.get('services').map((service) => {

        if (service.get('id') !== serviceId) {
            newState.push(service);
        }
    });
    return state.set('services', fromJS(newState));
}

function addService(state, service) {
    let newState = state.get('services').toJS();
    newState.push(service);
    return state.set('services', fromJS(newState));
}

const initialState = Map({
    services: null,
});

export default function admin_services(state = initialState, action) {
    switch (action.type) {
    case ADMIN_SERVICES_REFRESH_SUCCESS:
        return normalizeServices(state, action.serviceList);
    case ADMIN_SERVICE_DELETE_SUCCESS:
        return deleteService(state, action.deletedServiceId);
    case ADMIN_SERVICE_ADD_SUCCESS:
        return addService(state, action.addedService);
    case ADMIN_SERVICE_ADD_REQUEST:
    case ADMIN_SERVICE_ADD_FAIL:
    case ADMIN_SERVICE_DELETE_REQUEST:
    case ADMIN_SERVICE_DELETE_FAIL:
    case ADMIN_SERVICES_REFRESH_REQUEST:
    case ADMIN_SERVICES_REFRESH_FAIL:
    default:
        return state;
    }
}
