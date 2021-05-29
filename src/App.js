import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import PrivateRoute from './components/auth/PrivateRoute';
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup';
import Header from './components/common/Header';
import AddPost from './components/feed/AddPost';
import Mainfeed from './components/feed/Mainfeed';
import Activity from './components/feed/Activity';
import Home from './components/Home';
import Profile from './components/profile/Profile';


const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/feed" component={Mainfeed} />
        <PrivateRoute exact path="/post" component={AddPost} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/activity" component={Activity} />
      </Switch>
    </Router>
  );
}

export default App;
