import './App.css';

import { SearchBar } from './components/SearchBar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
        <SearchBar keyword='1'/>
      </header>
    </div>
  );
}

export default App;
