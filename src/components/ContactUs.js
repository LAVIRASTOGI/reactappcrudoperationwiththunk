import React, { Component } from 'react';

import Header from './Header'
import SimpleBreadcrumbs from '../shared/Breadcrums'

class ContactUs extends Component {

    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        return (
            <div>
            <Header></Header>
            <SimpleBreadcrumbs></SimpleBreadcrumbs>
                Contact Us !!!
            </div>
        );
    }
}


export default ContactUs;
