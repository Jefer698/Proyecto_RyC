import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Recovery from './pages/Recovery';
import AssembleMenu from './pages/AssembleMenu';
import BranchOffice from './pages/BranchOffice';
import Contact from './pages/Contact';
import Schedule from './pages/Schedule';
import Work from './pages/Work';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
            <Login/>
      </Route>
      <Route path="/login">
            <Login/>
      </Route>
      <Route path="/register">
        <Register/>
      </Route>
      <Route path="/recovery">
        <Recovery/>
      </Route>
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/aboutus">
        <AboutUs/>
      </Route>
      <Route path="/assemble">
        <AssembleMenu/>
      </Route>
      <Route path="/branch">
        <BranchOffice/>
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
      <Route path="/schedule">
        <Schedule/>
      </Route>
      <Route path="/work">
        <Work/>
      </Route>
    
      </Switch>
      </Router>
  ) ;
}

export default App;
