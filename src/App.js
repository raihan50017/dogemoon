import React from "react";
import Home from "./components/home/Home";
import Navbar from "./components/shared/Navbar";
import TopNav from "./components/shared/TopNav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home2 from "./components/home2/Home2";
import Home3 from "./components/home3/Home3";
const App = () => {
  return (
    <React.Fragment>
      <TopNav></TopNav>
      <Navbar></Navbar>
      <Router>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home2">
          <Home2></Home2>
        </Route>
        <Route exact path="/home3">
          <Home3></Home3>
        </Route>
      </Router>
    </React.Fragment>
  );
};

export default App;
