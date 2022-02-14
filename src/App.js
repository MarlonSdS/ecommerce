import { BrowserRouter } from 'react-router-dom';
import Rotas from './Router/rotas';
import './App.css';
import Header from './components/header';
import Dashboard from './components/dashboard';
import Home from './components/Home';

function App() {

  return (
    <div className="App">
        <Header />
        <Dashboard />
        <Rotas />
    </div>
  );
}

export default App;
