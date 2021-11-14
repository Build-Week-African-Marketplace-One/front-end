import './App.css';
import React from "react";
import { Route, Switch } from "react-router";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Prices from "./components/Prices";
import User from "./components/User"

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route path="/user" component={User}/>
      <Route path="/prices" component={Prices}/>
      <Route path="/logout" component={Logout}/>
      <Route path="/login" component={Login}/>
      <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
