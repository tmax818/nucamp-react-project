import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Home = (props) => {
  console.log(props);
  return <div>Home</div>;
};

const Router = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Router;
