import React from "react";
import Loadable from "react-loadable";
import Loading from "../../../layouts/Loading";
import DashMainLayout from "../layouts/main";

export const Dashboard = Loadable({
	loader: () => import("../index"),
	loading: Loading,
});

export const Demo1 = Loadable({
	loader: () => import("../components/demo1"),
	loading: Loading,
});

export const Demo2 = Loadable({
	loader: () => import("../components/demo2"),
	loading: Loading,
});

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