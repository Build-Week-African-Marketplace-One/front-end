import './App.css';
import React from "react";
import { Route, Switch } from "react-router";

import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";
import Prices from "./components/Prices";
import User from "./components/User";


function App() {



  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route path="/user" component={User}/>
          <Route path="/signup" component={SignUp} />
          <Route path="/prices" component={Prices}/>
          <Route path="/login" component={Login}/>
          <Route exact path="/" component={Home}/>
        </Switch>
    </div>
  );
}

export default App;
