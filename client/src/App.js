import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Resource from './components/resource';
import Home from './components/home';
import Volunteer from './components/volunteer';
import Form from './components/volunteerForm';
import Groups from './components/groups'

function App() {
  return (
    <div className="App">

      <Router>
        <div className="navbar">
        
        <Link to="/home" className="item">Home</Link>
        <Link to="/form" className="item">Sign-Up Form</Link>
        <Link to="/volunteer" className="item">Volunteers</Link>
        <Link to="/resource" className="item">Resources</Link>
        <Link to="/groups" className="item">Groups</Link>

        </div>

    
        <Route exact path="/home" component={Home} />
        <Route path="/form" component={Form} />
        <Route path="/resource" component={Resource} />
        <Route path="/volunteer" component={Volunteer} />
        <Route path="/groups" component={Groups}/>
       
       
      </Router>


    </div>
  );
}

export default App;
