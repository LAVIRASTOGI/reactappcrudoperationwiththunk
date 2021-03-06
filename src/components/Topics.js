import { Link, Route } from 'react-router-dom';
import React , { Suspense, lazy } from 'react';

import BackEndTopic from "./BackEndTopic";
import FrontEndTopic from "./FrontEndTopic";
import Header from './Header';
import SimpleBreadcrumbs from '../shared/Breadcrums'

const LazyLoad = lazy(()=>import('./LazyLoad'))

class Topics extends React.Component {

    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <div>
         <Header></Header>
         <SimpleBreadcrumbs></SimpleBreadcrumbs>
         <Suspense fallback ={<div> <h1> please wait...</h1></div>}>
             
             <LazyLoad></LazyLoad>
         </Suspense>
                <h1>Topics:</h1>
                <Link to={`${this.props.match.path}/front-end`}>Front End Topics</Link>
                &nbsp;
                <Link to={this.props.match.path + '/back-end'}>Back End Topics</Link>

                <Route path={this.props.match.path + '/front-end'} component={FrontEndTopic} />
                <Route path={`${this.props.match.path}/back-end`} component={ ()=><BackEndTopic title="you are backend node topic"/>} />
               
            </div>
        );
    }
}

export default Topics;
