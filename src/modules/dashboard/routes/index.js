import React from "react";
import { Route } from "react-router-dom";

import Demo1 from "../components/demo1"
import Demo2 from "../components/demo2";

const DashboardRouter = () => {
  return (
    <React.Fragment>
      <Route path="/dashboard/demo1" component={Demo1} />
      <Route path="/dashboard/demo2" component={Demo2} />
    </React.Fragment>
  );
};

export default DashboardRouter