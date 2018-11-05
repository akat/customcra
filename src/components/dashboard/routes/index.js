import React from "react";
import DashMainLayout from "../layouts/main"
import Dashboard from "../index"
import Demo1 from "../components/demo1"
import Demo2 from "../components/demo2";

const DashboardRouter = ({match, location, history}) => {
  return (
    <React.Fragment>
      <DashMainLayout exact path={match.url} component={Dashboard} />
      <DashMainLayout path={`${match.url}/demo1`} component={Demo1} />
      <DashMainLayout path={`${match.url}/demo2`} component={Demo2} />
    </React.Fragment>
  );
};

export default DashboardRouter