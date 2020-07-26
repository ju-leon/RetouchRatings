import React from 'react';
import logo from './logo.svg';
import './App.css';
import FaceImage from "./FaceImage";
import RatingBox from "./RatingBox";
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import Home from "./Home";
import {Button} from '@material-ui/core';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import {Container, Row, Col} from 'reactstrap';
import Leaderboard from "./Leaderboard";


function App() {

    return (
        <div className="App">
            <Router>


                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/rate' component={RatingBox}/>
                    <Route path='/leaderboard' component={Leaderboard}/>
                </Switch>

                <div className="copyright">
                    © 2020 RetouchML
                </div>
                <div className="divider"/>
            </Router>
        </div>
    );
}

export default App;
