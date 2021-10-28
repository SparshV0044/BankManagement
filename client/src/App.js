import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch } from "react-router-dom";
import Home from "../src/components/Home";
import Navbar from "../src/components/Navbar";
import Errorpage from "../src/components/Errorpage";
import Transaction from "../src/components/Transaction";
import Transfer from "../src/components/Transfer";
import Createuser from "../src/components/Createuser";
import "../src/css/navbar.css";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Createuser">
        <Createuser />
      </Route>
      <Route exact path="/Transfer">
        <Transfer />
      </Route>
      <Route exact path="/Transaction">
        <Transaction />
      </Route>
      <Route>
        <Errorpage />
      </Route>
    </Switch>
  );
};

function App() {
  return (
    <>
      <Navbar />
      <Routing />
    </>
  );
}

export default App;
