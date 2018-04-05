import {
    ADMIN_INTRODUCTION_REFRESH_REQUEST,
    ADMIN_INTRODUCTION_REFRESH_SUCCESS,
    ADMIN_INTRODUCTION_REFRESH_FAIL,
    ADMIN_INTRODUCTION_UPDATE_REQUEST,
    ADMIN_INTRODUCTION_UPDATE_SUCCESS,
    ADMIN_INTRODUCTION_UPDATE_FAIL,
} from 'src/actions/admin_introduction';
import { Map } from 'immutable';

function normalizeIntroduction(state, introduction) {
    return state.set('introduction', introduction);
}

function updateIntroduction(state, introduction) {
    return state.set('introduction', introduction);
}

const initialState = Map({
    introduction: null,
});

export default function admin_introduction(state = initialState, action) {
    switch (action.type) {
    case ADMIN_INTRODUCTION_REFRESH_SUCCESS:
        return normalizeIntroduction(state, action.introduction);
    case ADMIN_INTRODUCTION_UPDATE_SUCCESS:
        return updateIntroduction(state, action.introduction);
    case ADMIN_INTRODUCTION_UPDATE_REQUEST:
    case ADMIN_INTRODUCTION_UPDATE_FAIL:
    case ADMIN_INTRODUCTION_REFRESH_REQUEST:
    case ADMIN_INTRODUCTION_REFRESH_FAIL:
    default:
        return state;
    }
}
