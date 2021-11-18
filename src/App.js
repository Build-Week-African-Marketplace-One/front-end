import './App.css';
import React from "react";
import { Route, Switch } from "react-router";

import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";
import Products from "./components/Products";
import User from "./components/User";

import PrivateRoute from './components/PrivateRoute';


function App() {

  return (
    <div className="App">
      <Header/>
        <Switch>
          <PrivateRoute path="/user" component={User}/>
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/products" component={Products}/>
          <Route path="/login" component={Login}/>
          <Route exact path="/" component={Home}/>
        </Switch>
    </div>
  );
}

export default App;

