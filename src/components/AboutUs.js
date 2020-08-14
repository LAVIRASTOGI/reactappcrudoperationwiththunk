import React, { Component } from 'react';

import Header from './Header'
import SimpleBreadcrumbs from '../shared/Breadcrums'

class AboutUs extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return ( <
            div >
            <
            Header > < /Header> <
            SimpleBreadcrumbs > < /SimpleBreadcrumbs>
            About Us!!!
            <
            /div>
        );
    }
}


export default AboutUs;