import PropType from 'prop-types'
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
         <div>{this.props.title}</div>
            </div>
        );
    }
}

BackEndTopic.propTypes={
  title:PropType.string  
}


export default BackEndTopic;
