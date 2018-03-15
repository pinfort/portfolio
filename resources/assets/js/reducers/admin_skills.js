import {
    ADMIN_SKILLS_REFRESH_REQUEST,
    ADMIN_SKILLS_REFRESH_SUCCESS,
    ADMIN_SKILLS_REFRESH_FAIL,
    ADMIN_SKILL_DELETE_REQUEST,
    ADMIN_SKILL_DELETE_SUCCESS,
    ADMIN_SKILL_DELETE_FAIL,
    ADMIN_SKILL_ADD_REQUEST,
    ADMIN_SKILL_ADD_SUCCESS,
    ADMIN_SKILL_ADD_FAIL,
} from 'src/actions/admin_skills';
import { Map, fromJS } from 'immutable';

function normalizeSkills(state, skillList) {
    return state.set('skills', fromJS(skillList));
}

function deleteSkill(state, skillId) {
    let newState = [];
    state.get('skills').map((skill) => {

        if (skill.get('id') !== skillId) {
            newState.push(skill);
        }
    });
    return state.set('skills', fromJS(newState));
}

function addSkill(state, skill) {
    let newState = state.get('skills').toJS();
    newState.push(skill);
    return state.set('skills', fromJS(newState));
}

const initialState = Map({
    skills: null,
});

export default function admin_skills(state = initialState, action) {
    switch (action.type) {
    case ADMIN_SKILLS_REFRESH_SUCCESS:
        return normalizeSkills(state, action.skillList);
    case ADMIN_SKILL_DELETE_SUCCESS:
        return deleteSkill(state, action.deletedSkillId);
    case ADMIN_SKILL_ADD_SUCCESS:
        return addSkill(state, action.addedSkill);
    case ADMIN_SKILL_ADD_REQUEST:
    case ADMIN_SKILL_ADD_FAIL:
    case ADMIN_SKILL_DELETE_REQUEST:
    case ADMIN_SKILL_DELETE_FAIL:
    case ADMIN_SKILLS_REFRESH_REQUEST:
    case ADMIN_SKILLS_REFRESH_FAIL:
    default:
        return state;
    }
}
