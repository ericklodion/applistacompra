import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Pages/Login'
import CreateAccount from './Pages/CreateAccount'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/createaccount' component={CreateAccount} />
        <Route path='/home' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
