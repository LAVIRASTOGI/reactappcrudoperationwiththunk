import * as actionType from '../components/store/actions/actionType'

import React, { Component } from 'react';

import Header from './Header';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
       data:state.counterReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
       OnIncrementAction:()=>{dispatch({type:actionType.INCREMENT})},
       OnDecrementAction:()=>{dispatch({type:actionType.DECREMENT})}
    };
}

class Counter extends Component {
    render() {
        return (
            <div>
            <Header></Header>
                <h1>Counter:{this.props.data.counter}</h1>
                <button onClick={()=>{this.props.OnIncrementAction()}}>Increment</button>
                <button onClick={()=>{this.props.OnDecrementAction()}}>Decrement</button>
                <hr/>
                <br/>
               
            </div>
          
        );
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(Counter);