import React from "react";
import { Switch } from "react-router-dom";
import DashMainLayout from "../layouts/main"
import Dashboard from "../index"
import Demo1 from "../components/demo1"
import Demo2 from "../components/demo2";

const DashboardRouter = () => {
  return (
    <Switch>
      <DashMainLayout exact path="/dashboard" component={Dashboard} />
      <DashMainLayout path="/dashboard/demo1" component={Demo1} />
      <DashMainLayout path="/dashboard/demo2" component={Demo2} />
    </Switch>
  );
};

export default DashboardRouter