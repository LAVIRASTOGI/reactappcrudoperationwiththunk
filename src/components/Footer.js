import React, { Component } from 'react';

class Footer extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            name: this.props.cName
        }
    }

    render() {
        return (
            <div className="footer">
                {/* <p>Copyright &copy; 1999-2019 by {this.state.name}. All Rights Reserved.</p> */}
                <p>Copyright &copy; 1999-2019 by {this.props.cName}. All Rights Reserved.</p>
            </div>
        );
    }
}


export default Footer;
