import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/Landing';
import List from './components/List';

export default (
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/list" component={List}/>
    </Switch>
)