import {
    TAG_DETAIL_REFRESH_REQUEST,
    TAG_DETAIL_REFRESH_SUCCESS,
    TAG_DETAIL_REFRESH_FAIL,
} from 'src/actions/tag_detail';
import { Map, fromJS } from 'immutable';

function normalizeTagDetail(state, tag) {
    return state.set('tag', fromJS(tag));
}

const initialState = Map({
    tag: null,
});

export default function tagDetail(state = initialState, action) {
    switch (action.type) {
    case TAG_DETAIL_REFRESH_SUCCESS:
        return normalizeTagDetail(state, action.tag);
    case TAG_DETAIL_REFRESH_REQUEST:
    case TAG_DETAIL_REFRESH_FAIL:
    default:
        return state;
    }
}
