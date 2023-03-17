import './App.css';
import { ListOfPokemon } from './components/ListOfPokemon';
import { Pokemon } from './components/Pokemon';
import { SearchBar } from './components/SearchBar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
          <SearchBar keyword='1'/>
        <div className="App-body">
          <Pokemon />
          <ListOfPokemon/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
