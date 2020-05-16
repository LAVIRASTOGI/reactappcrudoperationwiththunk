import React, { Component } from 'react';

class Home extends Component {

    constructor(props, context) {
        super(props, context);
        //this.goToEmployeeList =  this.goToEmployeeList.bind(this);
    }
    goToEmployeeList(){
        this.props.history.push("/emp-list");
    }
    render() {
        return (
            <div>
                <h1>Heome Page !!!</h1>
                <button onClick={()=>this.goToEmployeeList()}>Go to Employee List</button>
            </div>
        );
    }
}

export default Home;
