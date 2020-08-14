import React from 'react';
import SimpleBreadcrumbs from '../shared/Breadcrums'

class FrontEndTopic extends React.Component {

    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <div>
                <SimpleBreadcrumbs></SimpleBreadcrumbs>
                <h1>Front End Topic</h1>
            </div>
        );
    }
}

export default FrontEndTopic;
