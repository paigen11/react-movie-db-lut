/* eslint react/no-did-mount-set-state:0 */
/* allows for individual eslinting of files */
import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import './App.css';

import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';

// converted to functional stateless component
const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);

export default App;