import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import Resource from './components/resource';
import Home from './components/home'

function App() {
  return (
    <div className="App">

      <Router>
        <div className="navbar">

        <Link to="/" className="item">Home</Link>
        <Link to="/resource" className="item">Resources</Link>

        </div>

        <div className="App">
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/resource" component={Resource} />
        </Switch>
        </div>
      </Router>


    </div>
  );
}

export default App;
