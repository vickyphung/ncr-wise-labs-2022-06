
import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import Player from './components/Player';

function App() {
  return (
    <div className="App">
      <Header />
      {/* whichPlayer is a custom property */}
      <Player whichPlayer='X'/>
      <Player whichPlayer='O'/>
      <Board />

    </div>
  );
}

export default App;
