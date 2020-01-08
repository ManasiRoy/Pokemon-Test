import React from 'react';
import Pokemon from './components/pokemon'
import './App.scss';
import UserProfile from './components/common/userProfile'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <Switch>
                <Route path="/" exact component={Pokemon}></Route>
                <Route path="/:id" component={UserProfile}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>

  );
}

export default App;
