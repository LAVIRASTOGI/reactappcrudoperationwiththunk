import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Counter from './components/Counter'
import EmpDetail from "./components/emp-details";
import EmpList from "./components/EmpList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Topics from "./components/Topics";
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            (<Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about-us' component={AboutUs} />
        <Route path='/emp-list' component={EmpList} />
        <Route path='/counter' component={Counter} />
        
        <Route path='/emp-detail/:id' component={EmpDetail} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/topics' component={Topics} />
        <Route path='*' component={() => { return (<div>Error 404</div>); }} />
      </Switch>
      <Footer />
    </Router>)

        );
    }
}

export default App;