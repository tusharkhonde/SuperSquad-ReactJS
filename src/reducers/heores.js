import { ADD_CHARACTER, REMOVE_HERO } from '../actions';
import createCharacter from './helper';

let heroes = (state = [], action) =>{
    switch(action.type){
        case ADD_CHARACTER:
            let heroes = [...state, createCharacter(action.id)];
            return heroes;
        case REMOVE_HERO:
            heroes = state.filter(heroes => heroes.id !== action.id);
            return heroes;
        default:
            return state;
    }
}

export default heroes;