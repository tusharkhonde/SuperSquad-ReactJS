import actions from '../actions';
import createCharacter from './helper';

const heroes = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_CHARACTER:
      return [...state, createCharacter(action.id)];
    case actions.REMOVE_HERO:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

export default heroes;
