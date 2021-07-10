import React from 'react';
import FooterSection from './Footer';
import HeaderSection from './Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Landing from './landingComponents/landing';
import Terms from './termsAndCondition/terms';
import ContactUs from './ContactUs/ContactUs';
import Blog from './blog/Blog';
import Faq from './Faq/Faq';
import Dashboard from './Dashboard/Dashboard'
import AboutUs from './aboutUs/aboutUs';
function App() {
 

const history = createBrowserHistory()
  return (
    <div className="app">
      <Router>
      <div className="container">
        <HeaderSection path={history.location.pathname.split("/")[1]}/> 
        <div className="content-section">
      
              <Switch>
              <Route path="/dashboard/orders/detail">
                  <Dashboard type="orderDetails"/>
                </Route>
              <Route path="/dashboard/orders">
                  <Dashboard type="orders"/>
                </Route>
              <Route path="/dashboard/support">
                  <Dashboard type="support"/>
                </Route>
              <Route path="/dashboard/profile">
                  <Dashboard type="profile"/>
                </Route>
                <Route path="/dashboard">
                  <Dashboard type="userDashboard"/>
                </Route>
                <Route path="/about">
                  <AboutUs/>
                </Route>
                <Route path="/faq">
                  <Faq/>
                </Route>
                <Route path="/blog">
                  <Blog />
                </Route>
                <Route path="/contact">
                  <ContactUs />
                </Route>
                <Route path="/terms">
                  <Terms />
                </Route>
                <Route path="/">
                  <Landing />
                </Route>
                
                
            </Switch>
        
        </div>
      </div>
      {history.location.pathname.split("/")[1] !== "dashboard" ? <FooterSection /> : null}
      
      </Router>
    </div>
  );
}

export default App;
