
import './App.css';
import GamePage from './components/GamePage';
import HomePage from './components/HomePage'
import { useRoutes } from 'hookrouter';

function App() {
  const routes = {
    '/': () => <HomePage />,
    '/game-page': () => <GamePage />
  };
  const routeResult = useRoutes(routes);
  return (
    <div className="App">
      {routeResult}
    </div>
  );
}

export default App;
