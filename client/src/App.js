import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Resource from './components/resource';
import Home from './components/home';
import Volunteer from './components/volunteer';
import Form from './components/volunteerForm'

function App() {
  return (
    <div className="App">

      <Router>
        <div className="navbar">

        <Link to="/" className="item">Home</Link>
        <Link to="/resource" className="item">Resources</Link>
        <Link to="/volunteer" className="itme">Volunteers</Link>
        <Link to="/form" className="item">Volunteer Form</Link>

        </div>

        <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/resource" component={Resource} />
        <Route path="/volunteer" component={Volunteer} />
        <Route path="/form" component={Form} />
       
        </div>
      </Router>


    </div>
  );
}

export default App;
