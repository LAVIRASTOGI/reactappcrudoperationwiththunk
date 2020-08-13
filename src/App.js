import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ThemeContext ,{themes} from './components/theme-context'

import AboutUs from "./components/AboutUs";
import Button from './components/Buuton'
import ContactUs from "./components/ContactUs";
import Counter from './components/Counter'
import EmpDetail from "./components/emp-details";
import EmpList from "./components/EmpList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from './components/Login'
import Logout from './components/Logout'
import PrivateRoute from './components/PrivateRoute'
import Topics from "./components/Topics";
import { connect } from 'react-redux';
import { useState } from 'react';

export default function App () {
  const [colorTheme,setcolorTheme]=useState(themes.dark);
  const colorHandler= ()=>{

    (colorTheme!==themes.dark)?
    setcolorTheme(themes.dark):
    setcolorTheme(themes.light);

 }
        return (
          <div className='app1' style={colorTheme}>
        <ThemeContext.Provider value={themes}>
         <Button clickBtn={colorHandler} ></Button> 
        </ThemeContext.Provider>
     

<Router>
    
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about-us' component={AboutUs} />
      <Route path='/logout' exact component={Logout} />
      <PrivateRoute path='/emp-list' component={EmpList} />
      <Route path='/counter' component={Counter} />
      <Route path="/login" component={Login}></Route>
      <Route path='/emp-detail/:id' component={EmpDetail} />
      <Route path='/contact-us' component={ContactUs} />
      <Route path='/topics' component={Topics} />
      <Route path='*' component={() => { return (<div>Error 404</div>); }} />
    </Switch>
    <Footer />
  </Router>
        
          </div>

        );
    
}

