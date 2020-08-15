import React from 'react';

const translatedprops= (props)=>{
    let newprops={}
    if(props.disable){
    newprops= {...props,value1:'diabled passsed HOC true'}


    }
    else{
    newprops= {...props, value1:'diabled passsed HOC false'}
    }
    return newprops;
}

const HOC = (wrappedComponent)=>{
    return (props)=>{
        return wrappedComponent(translatedprops(props))
    }
   
//     return (props) =>(
       
// <div>
//     <h1>passed through me HOC</h1>
//     <wrappedComponent  {...translatedprops(props)} ></wrappedComponent>
// </div>
//     );
}
export default HOC; 