import './App.css';
import { ListOfPokemon } from './components/ListOfPokemon';

import { SearchBar } from './components/SearchBar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
        <SearchBar keyword='1'/>
        <ListOfPokemon/>
      </header>
    </div>
  );
}

export default App;
