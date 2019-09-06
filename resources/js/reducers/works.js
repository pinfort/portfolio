import {
    WORKS_REFRESH_REQUEST,
    WORKS_REFRESH_SUCCESS,
    WORKS_REFRESH_FAIL,
} from 'src/actions/works';
import { Map, fromJS } from 'immutable';

function normalizeWorks(state, workList) {
    return state.set('works', fromJS(workList));
}

const initialState = Map({
    works: null,
});

export default function works(state = initialState, action) {
    switch (action.type) {
    case WORKS_REFRESH_SUCCESS:
        return normalizeWorks(state, action.workList);
    case WORKS_REFRESH_REQUEST:
    case WORKS_REFRESH_FAIL:
    default:
        return state;
    }
}
