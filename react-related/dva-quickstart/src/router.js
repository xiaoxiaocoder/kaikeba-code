import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      {/* <Link to="/">Home</Link> */}
      {/* <Link to="/product">Products</Link> */}
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/product" component={Products} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
