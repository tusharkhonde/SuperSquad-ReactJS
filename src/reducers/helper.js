import characterJson from '../data/characters.json';

const createCharacter = (id) => characterJson.find((c) => c.id === id);

export default createCharacter;
