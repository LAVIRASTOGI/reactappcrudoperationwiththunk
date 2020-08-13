import Header from './Header'

;
import React from 'react';
import { Redirect } from 'react-router-dom';

const Logout = () => {
    localStorage.setItem('tokenid',null);
            localStorage.setItem('Authenticated',"false")
    return (
        
        <div>
        <Header></Header>
          <Redirect to="/"></Redirect>
        </div>
    );
};

export default Logout;