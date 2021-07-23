import * as React from 'react';
import { connect } from 'react-redux';
import { removeHeroById } from '../actions';

class HeroesList {
  render() {
    return (
      <div>
        <ul className="list-group">
          <h4>Heores</h4>
          {this.props.heroes.map((hero) => (
            <li key={hero.id} className="list-group-item">
              <div className="list-item">
                <b>{hero.name}</b>
              </div>
              <div
                className="list-item right-button"
                aria-hidden="true"
                onClick={() => this.props.removeHeroById(hero.id)}
              >
                x
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  heroes: state.heroes,
});

export default connect(mapStateToProps, { removeHeroById })(HeroesList);
