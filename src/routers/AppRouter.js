import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WorkingExample from '../components/WorkingExample';
import Home from '../components/Home';

// TODO change div to fragment

const AppRouter = () => (
  <Router >
    <div>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/workingexample" component={WorkingExample}/>
      </Switch>
    </div>
  </Router>
)

export default AppRouter;