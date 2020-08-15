import React ,{ Component } from "react";

import Btn from './btn';

class App1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <>
      
            <div >Hello</div>
            <Btn disable={true}></Btn>

            </>
         );
    }
}
 
export default App1;