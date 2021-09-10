
import './App.scss';
import GamePage from './components/GamePage';
import HomePage from './components/HomePage'
import {
  Switch,
  Route,
} from "react-router-dom";
import SelectDiff from './components/SelectDiff';

function App() {
  return (
      <div className="App">
        <Switch>
          <Route exact path="/game-page/:level">
            <GamePage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/select-difficulty">
            <SelectDiff />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
