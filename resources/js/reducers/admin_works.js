import {
    ADMIN_WORKS_REFRESH_REQUEST,
    ADMIN_WORKS_REFRESH_SUCCESS,
    ADMIN_WORKS_REFRESH_FAIL,
    ADMIN_WORK_DELETE_REQUEST,
    ADMIN_WORK_DELETE_SUCCESS,
    ADMIN_WORK_DELETE_FAIL,
    ADMIN_WORK_ADD_REQUEST,
    ADMIN_WORK_ADD_SUCCESS,
    ADMIN_WORK_ADD_FAIL,
} from 'src/actions/admin_works';
import { Map, fromJS } from 'immutable';

function normalizeWorks(state, workList) {
    return state.set('works', fromJS(workList));
}

function deleteWork(state, workId) {
    let newState = [];
    state.get('works').map((work) => {

        if (work.get('id') !== workId) {
            newState.push(work);
        }
    });
    return state.set('works', fromJS(newState));
}

function addWork(state, work) {
    let newState = state.get('works').toJS();
    newState.push(work);
    return state.set('works', fromJS(newState));
}

const initialState = Map({
    works: null,
});

export default function admin_works(state = initialState, action) {
    switch (action.type) {
    case ADMIN_WORKS_REFRESH_SUCCESS:
        return normalizeWorks(state, action.workList);
    case ADMIN_WORK_DELETE_SUCCESS:
        return deleteWork(state, action.deletedWorkId);
    case ADMIN_WORK_ADD_SUCCESS:
        return addWork(state, action.addedWork);
    case ADMIN_WORK_ADD_REQUEST:
    case ADMIN_WORK_ADD_FAIL:
    case ADMIN_WORK_DELETE_REQUEST:
    case ADMIN_WORK_DELETE_FAIL:
    case ADMIN_WORKS_REFRESH_REQUEST:
    case ADMIN_WORKS_REFRESH_FAIL:
    default:
        return state;
    }
}
