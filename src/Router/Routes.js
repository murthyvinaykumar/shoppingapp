import React, { Component } from 'react';
import {Route,Switch,Router} from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Contact from '../Pages/Contact/Contact';
import CategoryWrapper from '../CommonComponents/CategoryWrapper/CategoryWrapper';
import {createBrowserHistory} from "history"; 
const history = createBrowserHistory();

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path='/Dashboard' component={Dashboard}/>
                    <Route path='/Contact' component={Contact}/>
                    {/* <Route path='/CategoryWrapper' component={CategoryWrapper}/> */}
                </Switch>
            </Router>
        )
    }
}
