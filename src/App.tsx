import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Main from './Main';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Main />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
