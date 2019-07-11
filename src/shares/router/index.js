import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import App from '../../App';
import SignInUp from '../sign-in-up/sign-in-up';

class RouterConfig extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path='/' exact component={App}></Route>
                <Route path='/signInUp/:id' component={SignInUp}></Route>
            </BrowserRouter>
        );
    }
}

export default RouterConfig;