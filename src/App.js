
import './App.scss';
import GamePage from './components/GamePage';
import HomePage from './components/HomePage'
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Switch>
          <Route exact path="/game-page">
            <GamePage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
