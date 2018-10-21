import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../index"
import Demo1 from "../components/demo1"
import Demo2 from "../components/demo2";

const DashboardRouter = () => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/dashboard/demo1" component={Demo1} />
      <Route path="/dashboard/demo2" component={Demo2} />
    </Switch>
  );
};

export default DashboardRouter