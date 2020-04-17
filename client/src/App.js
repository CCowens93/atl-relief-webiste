import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Resource from './components/resource';
import Home from './components/home'
import Volunteer from './components/volunteer'

function App() {
  return (
    <div className="App">

      <Router>
        <div className="navbar">

        <Link to="/" className="item">Home</Link>
        <Link to="/resource" className="item">Resources</Link>
        <Link to="volunteer" className="itme">Volunteers</Link>

        </div>

        <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/resource" component={Resource} />
        <Route path="/volunteer" component={Volunteer} />
       
        </div>
      </Router>


    </div>
  );
}

export default App;
