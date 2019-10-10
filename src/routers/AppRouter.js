import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Data from '../components/Data';
import AddBookPage from '../components/AddBookPage';
import PracticeAuth from '../components/PracticeAuth';
import PracticeAuthHome from '../components/PracticeAuthHome'

// TODO change div to fragment

const AppRouter = () => (
  <Router >
    <div>
      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path='/data' component={Data} />
        <Route path='/addbook' component={AddBookPage} />
        <Route path='/auth' component={PracticeAuth} />
        <Route path='/auth-home' component={PracticeAuthHome} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter;