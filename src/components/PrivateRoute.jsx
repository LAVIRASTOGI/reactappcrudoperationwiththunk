import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route {...rest} render={(props) => {
          var token=  localStorage.getItem('tokenid')
          
        var isAuthenticated = false;
        if (token !=='null')
          return (<Component {...props} />)
        else {
            alert('User is not Authenticated Please Login!!!');
          return (<Redirect to='/login' />);
        }
      }} />
    )
  }
  
  export default PrivateRoute;