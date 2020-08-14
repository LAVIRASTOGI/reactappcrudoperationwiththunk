import React from 'react';
import SimpleBreadcrumbs from '../shared/Breadcrums'

class BackEndTopic extends React.Component {

    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <div>
                <SimpleBreadcrumbs></SimpleBreadcrumbs>
                <h1>Back End Topic</h1>
            </div>
        );
    }
}

export default BackEndTopic;
