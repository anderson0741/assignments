import React from 'react';
import Sidebar from './Sidebar';
import './StarWarsAPI.css';

import {Switch, Route, Link} from 'react-router-dom';

import Character from './Sidebar/Character';


function StarwarsAPI(props) {
    return (
        <div className='app-wrapper'>
            <h1 className="title">React Wars</h1>
            <div className="main-wrapper">
                <Sidebar />
                <Switch>
                    <Route path='/characters/:id' component={Character} />
                </Switch>
            </div>
        </div>
    )
}

export default StarwarsAPI
