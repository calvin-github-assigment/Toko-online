import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';
import Login from "../../components/pages/Login";
import Dashboard from "../../components/pages/Dashboard";
import About from "../../conponents/pages/About";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route>
                    <Login />
                </Route>
            <Route path="/Dashboard">
                <Dashboard />
            </Route>
            <Route path="/About">
                <About />
            </Route>
        </Switch>
        </Router>
    );
};

export default Routes;