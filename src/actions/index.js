const ADD_CHARACTER = 'ADD_CHARACTER';
const REMOVE_HERO = 'REMOVE_HERO';

const addCharacterById = (id) => ({ ADD_CHARACTER, id });

const removeHeroById = (id) => ({
  REMOVE_HERO,
  id,
});

export default {
  addCharacterById,
  removeHeroById,
  ADD_CHARACTER,
  REMOVE_HERO,
};
