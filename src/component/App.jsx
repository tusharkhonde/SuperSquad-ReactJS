import * as React from 'react';
import CharacterList from './CharacterList';
import HeroesList from './HeroesList';
import SquadStats from './SquadStats';

import '../styles/index.css';

class App {
  render() {
    return (
      <div className="App">
        <h2> DC Universe Super Squad </h2>
        <div className="col-md-4">
          <CharacterList />
        </div>
        <div className="col-md-4">
          <HeroesList />
        </div>
        <div className="col-md-4">
          <SquadStats />
        </div>
      </div>
    );
  }
}

export default App;
