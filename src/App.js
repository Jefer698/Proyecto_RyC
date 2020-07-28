import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { browserHistory } from 'react-router';
import { routes } from './routes';


const App = () => {
  return (
    <Router
    history={browserHistory}
    >
      <Switch>
        {
          routes.map((route) => (
            <Route
              exact
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))
        }
      </Switch>
    </Router>
  );
}

export default App;
