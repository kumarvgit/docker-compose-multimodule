import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Link } from 'react=router-dom'

import OtherPage from './OtherPage';
import Fib from './Fib';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to react</h1>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other page</Link>
        </header>
      </div>
      <div>
        <Route exact path="/" component={Fib} />
        <Route path="/otherpage" component={OtherPage} />
      </div>
    </Router>
  );
}

export default App;
