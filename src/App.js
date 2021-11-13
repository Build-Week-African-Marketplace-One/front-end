import './App.css';
import React from "react";
import { Route, Switch } from "react-router";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";
import Logout from "./components/Logout";


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route path="/logout" component={Logout}/>
      <Route path="/login" component={Login}/>
      <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
