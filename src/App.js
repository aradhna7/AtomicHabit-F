import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import PrivateRoute from './components/auth/PrivateRoute';
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup';
import Header from './components/common/Header';
import Mainfeed from './components/feed/Mainfeed';
import Home from './components/Home';


const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/feed" component={Mainfeed} />
      </Switch>
    
    </Router>
  );
}

export default App;
