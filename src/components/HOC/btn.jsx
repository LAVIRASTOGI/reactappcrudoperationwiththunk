import HOC from './HOC'
import React from 'react';

const Btn = (props)=>{
    return (
    <div>{props.value1}</div>
    )
}
export default HOC(Btn) ;