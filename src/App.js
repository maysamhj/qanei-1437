import React from 'react';
import FooterSection from './Footer';
import HeaderSection from './Header';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Landing from './landingComponents/landing';
import Terms from './termsAndCondition/terms';
import SignUp from './signUp';
import SignIn from './signIn';
import AboutUs from './aboutUs/aboutUs';
import Faq from './Faq/Faq';
import ContactUs from './ContactUs/ContactUs';
import Blog from './blog/Blog';
import CartPage from './cart/CartPage';
import Checkout from './cart/Checkout';
import CheckoutResult from './cart/CheckoutResult';
import BookDetail from './bookDetail/BookDetail';
import SinglePost from './blog/singlePost';

function App() {
  return (
    <Router>
    <div className="app">
      <div className="container">
        <HeaderSection />
        <div className="content-section">
        
              <Switch>
                <Route path="/blog/post">
                  <SinglePost />
                </Route>
                <Route path="/detail">
                  <BookDetail />
                </Route>
                <Route path="/checkoutResult">
                  <CheckoutResult />
                </Route>
                <Route path="/checkout">
                  <Checkout/>
                </Route>
                <Route path="/cart">
                  <CartPage/>
                </Route>
                <Route path="/blog">
                  <Blog />
                </Route>
                <Route path="/contactUs">
                  <ContactUs />
                </Route>
                <Route path="/faq">
                  <Faq />
                </Route>
                <Route path="/aboutUs">
                  <AboutUs />
                </Route>
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
        </div>
      </div>
      <FooterSection />
    </div>
    </Router>
  );
}

export default App;
