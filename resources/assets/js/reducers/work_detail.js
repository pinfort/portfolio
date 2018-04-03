import {
    WORK_DETAIL_REFRESH_REQUEST,
    WORK_DETAIL_REFRESH_SUCCESS,
    WORK_DETAIL_REFRESH_FAIL,
} from 'src/actions/work_detail';
import { Map, fromJS } from 'immutable';

function normalizeWorkDetail(state, work) {
    return state.set('work', fromJS(work));
}

const initialState = Map({
    work: null,
});

export default function workDetail(state = initialState, action) {
    switch (action.type) {
    case WORK_DETAIL_REFRESH_SUCCESS:
        return normalizeWorkDetail(state, action.work);
    case WORK_DETAIL_REFRESH_REQUEST:
    case WORK_DETAIL_REFRESH_FAIL:
    default:
        return state;
    }
}
