import React, { Component } from 'react';

import Header from './Header'
import SimpleBreadcrumbs from '../shared/Breadcrums'

class Home extends Component {

    constructor(props, context) {
        super(props, context);
        //this.goToEmployeeList =  this.goToEmployeeList.bind(this);
    }
    goToEmployeeList(){
        this.props.history.push("/login");
    }
    render() {
        return (
            <div>
              <Header />
<SimpleBreadcrumbs></SimpleBreadcrumbs>
                <h1>Heome Page !!!</h1>
                <button onClick={()=>this.goToEmployeeList()}>SIGN IN</button>
            </div>
        );
    }
}

export default Home;
