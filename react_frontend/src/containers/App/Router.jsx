import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';
import LogIn from '../LogIn/index';
import LineChartTab from '../LineChartTab/IndexChart';
import PolarAreaChart from '../PolarAreaChartTab/IndexPolarChart';
import DoughnutChart from '../DoughnutChartTab/IndexDoughnutChart';
import UploadFile from '../UploadFile/IndexUploadFile';

const Pages = () => (
  <Switch>
    <Route path="/pages/lineChart" component={LineChartTab} />
    <Route path="/pages/polarAreaChart" component={PolarAreaChart} />
    <Route path="/pages/doughnutChart" component={DoughnutChart} />
    <Route path="/pages/upload_csv" component={UploadFile} />
  </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/pages" component={Pages} />
    </div>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/log_in" component={LogIn} />
        <Route path="/" component={wrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
