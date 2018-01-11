import * as React from 'react';
import { Router, Route,IndexRoute, hashHistory } from 'react-router';
import Home from '../page/layout';
import Register from '../page/personal/register';

let WelcomePage = ({title='Welcome To Typescript'})=>{
    return <div>{`Hello~ ${title}`}</div>
}

const routerConfig =  <Router history={hashHistory}>
                            <Route path="/" component={Home}>
                                <IndexRoute component={WelcomePage}/>
                                <Route path="/register" component={Register}/>
                            </Route>
                      </Router>



export default routerConfig;