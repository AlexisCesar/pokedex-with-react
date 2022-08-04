import './App.scss';

// Assets
import pokeball from './assets/images/pokeball.png';

function App() {
  return (
    <div className="App">
      <div className="title-logo">
        <h1>ReactDex!</h1>
        <img src={pokeball} alt="Pokeball logo" />
      </div>
    </div>
  );
}

export default App;
