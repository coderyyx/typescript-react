import * as React from 'react';
import { Router, Route,IndexRoute, hashHistory } from 'react-router';
import Home from '../page/TestUserInfo/home';

let WelcomePage = ({title='Welcome To Typescript'})=>{
    return <div>{`Hello~ ${title}`}</div>
}

const routerConfig =  <Router history={hashHistory}>
                            <Route path="/" component={Home}>
                                <IndexRoute component={WelcomePage}/>
                            </Route>
                      </Router>



export default routerConfig;
// const Greeter = ({name = 'world'}) => <div>Hello, {name}!</div>;