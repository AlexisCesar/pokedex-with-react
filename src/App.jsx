import './App.scss';

// Pages
import { Pokedex } from './pages';

// Components
import { Navbar } from './pages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Pokedex />
    </div>
  );
}

export default App;
