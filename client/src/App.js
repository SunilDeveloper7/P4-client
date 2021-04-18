import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import '/Users/sunillama/Assembly25/unit-4/P4/client/src/App.css';
import {Container } from 'semantic-ui-react'


import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { contained } from 'semantic-ui-react'


function App() {
  return (
    <Router>
    <container>
    <MenuBar />
    <Route exact path='/' component={Home}/>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/register' component={Register}/>
    
    </container>
      
      </Router>
    
  );
}

export default App;
