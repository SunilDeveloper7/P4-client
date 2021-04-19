import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';
import '/Users/sunillama/Assembly25/unit-4/P4/client/src/App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import MenuBar from './components/MenuBar'
import Message from './pages/Message'

function App() {
  return (
    <Router>
    <Container>
    <MenuBar />
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path='/message' component={Message}/>
      </Container>
    </Router>
  );
}

export default App;