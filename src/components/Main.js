import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Router from "./Router";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    );
  }
}

export default Main;
