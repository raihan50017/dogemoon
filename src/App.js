import React from "react";
import Home from "./components/home/Home";
import Navbar from "./components/shared/Navbar";
import TopNav from "./components/shared/TopNav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home2 from "./components/home2/Home2";
import Home3 from "./components/home3/Home3";
import Home4 from "./components/home4/Home4";
const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home2">
          <Home2></Home2>
        </Route>
        <Route exact path="/home3">
          <TopNav bg="#0F2536"></TopNav>
          <Navbar color="dark" bg="#050517"></Navbar>
          <Home3></Home3>
        </Route>
        <Route exact path="/home4">
          <TopNav bg="#EBDCFF"></TopNav>
          <Navbar color="light" bg="#F7ECFF"></Navbar>
          <Home4></Home4>
        </Route>
      </Router>
    </React.Fragment>
  );
};

export default App;
