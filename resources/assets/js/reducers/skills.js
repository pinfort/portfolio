import {
    SKILLS_REFRESH_REQUEST,
    SKILLS_REFRESH_SUCCESS,
    SKILLS_REFRESH_FAIL,
} from 'src/actions/skills';
import { Map, fromJS } from 'immutable';

function normalizeSkills(state, skillList) {
    return state.set('content', fromJS(skillList));
}

const initialState = Map({
    content: null,
});

export default function skills(state = initialState, action) {
    switch (action.type) {
    case SKILLS_REFRESH_SUCCESS:
        return normalizeSkills(state, action.skillList);
    case SKILLS_REFRESH_REQUEST:
    case SKILLS_REFRESH_FAIL:
    default:
        return state;
    }
}
