import actions from '../actions';
import characterJson from '../data/characters.json';
import removeHero from './helper';

function characters(state = characterJson, action) {
  switch (action.type) {
    case actions.ADD_CHARACTER:
      return state.filter((character) => character.id !== action.id);
    case actions.REMOVE_HERO:
      return [...state, removeHero(action.id)];
    default:
      return state;
  }
}

export default characters;
