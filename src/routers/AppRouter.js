import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Data from '../components/Data';
import AddBookPage from '../components/AddBookPage';

// TODO change div to fragment

const AppRouter = () => (
  <Router >
    <div>
      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path='/data' component={Data} />
        <Route path='/addbook' component={AddBookPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter;