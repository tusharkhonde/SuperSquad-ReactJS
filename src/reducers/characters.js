import { ADD_CHARACTER, REMOVE_HERO } from '../actions'
import character_json from '../data/characters.json';
import removeHero from './helper';

function characters( state = character_json, action){
    switch(action.type){
        case ADD_CHARACTER:
            let characters = state.filter(character => character.id !== action.id);
            return characters;
        case REMOVE_HERO:
            characters = [...state, removeHero(action.id)];
            return characters;
        default:
            return state;
    }
}

export default characters;