import './App.css';

import { Pokemon } from './components/Pokemon';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
        <Pokemon keyword='pinsir'/>
      </header>
    </div>
  );
}

export default App;
