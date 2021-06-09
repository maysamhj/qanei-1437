import React from 'react';
import FooterSection from './Footer';
import HeaderSection from './Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from './landingComponents/landing';
import Terms from './termsAndCondition/terms';
import SignUp from './signUp';
import SignIn from './signIn';

function App() {
  return (
    <div className="app">
      <div className="container">
        <HeaderSection />
        <div className="content-section">
        <Router>
              <Switch>
                <Route path="/signIn">
                  <SignIn />
                </Route>
                <Route path="/signUp">
                  <SignUp />
                </Route>
                <Route path="/terms">
                  <Terms />
                </Route>
                <Route path="/">
                  <Landing />
                </Route>
            </Switch>
        </Router>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}

export default App;
