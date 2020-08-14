import Header from './Header'

;
import React from 'react';
import { Redirect } from 'react-router-dom';
import SimpleBreadcrumbs from '../shared/Breadcrums'

const Logout = () => {
    localStorage.setItem('tokenid',null);
            localStorage.setItem('Authenticated',"false")
    return (
        
        <div>
        <Header></Header>
        <SimpleBreadcrumbs></SimpleBreadcrumbs>
          <Redirect to="/"></Redirect>
        </div>
    );
};

export default Logout;