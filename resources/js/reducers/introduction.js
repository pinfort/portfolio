import {
    INTRODUCTION_REFRESH_REQUEST,
    INTRODUCTION_REFRESH_SUCCESS,
    INTRODUCTION_REFRESH_FAIL,
} from 'src/actions/introduction';
import { Map } from 'immutable';

function normalizeIntroduction(state, introduction) {
    return state.set('introduction', introduction);
}

const initialState = Map({
    introduction: null,
});

export default function introduction(state = initialState, action) {
    switch (action.type) {
    case INTRODUCTION_REFRESH_SUCCESS:
        return normalizeIntroduction(state, action.introduction);
    case INTRODUCTION_REFRESH_REQUEST:
    case INTRODUCTION_REFRESH_FAIL:
    default:
        return state;
    }
}
