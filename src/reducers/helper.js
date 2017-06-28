import character_json from '../data/characters.json';

let createCharacter = (id) => {
    let character = character_json.find(c => c.id === id);
    return character;
}

export default createCharacter;