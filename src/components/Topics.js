import { Link, Route } from 'react-router-dom';

import BackEndTopic from "./BackEndTopic";
import FrontEndTopic from "./FrontEndTopic";
import Header from './Header';
import React from 'react';

class Topics extends React.Component {

    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <div>
         
                <h1>Topics:</h1>
                <Link to={`${this.props.match.path}/front-end`}>Front End Topics</Link>
                &nbsp;
                <Link to={this.props.match.path + '/back-end'}>Back End Topics</Link>

                <Route path={this.props.match.path + '/front-end'} component={FrontEndTopic} />
                <Route path={`${this.props.match.path}/back-end`} component={BackEndTopic} />
            </div>
        );
    }
}

export default Topics;
