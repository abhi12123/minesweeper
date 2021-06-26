
import './App.scss';
import GamePage from './components/GamePage';
import HomePage from './components/HomePage'
import { useRoutes } from 'hookrouter';

function App() {
  const path = process.env.PUBLIC_URL;
  const routes = {}
  routes[`${path}/`] = () => <HomePage />;
  routes[`${path}/game-page`] = () => <GamePage />
  const routeResult = useRoutes(routes);
  return (
    <div className="App">
      {routeResult}
    </div>
  );
}

export default App;
