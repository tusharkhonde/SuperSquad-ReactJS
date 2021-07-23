import * as React from 'react';
import { connect } from 'react-redux';
import { addCharacterById } from '../actions';

class CharacterList {
  render() {
    return (
      <div>
        <ul className="list-group">
          <h4> Characters </h4>
          {this.props.characters.map((character) => (
            <li key={character.id} className="list-group-item">
              <div className="list-item">
                <b>{character.name}</b>
              </div>
              <div
                className="list-item right-button"
                aria-hidden="true"
                onClick={() => this.props.addCharacterById(character.id)}
              >
                +
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  characters: state.characters,
});

export default connect(mapStateToProps, { addCharacterById })(CharacterList);
