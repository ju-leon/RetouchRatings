// Home.js

import React, {Component} from 'react';
import Fab from "@material-ui/core/Fab";
import NavigationIcon from '@material-ui/icons/Add';
import {BrowserRouter as Router, useHistory} from 'react-router-dom';
import {Col, Container, Row} from "reactstrap";
import './Home.css';


const Home = () => {
    const history = useHistory();

    const handleClickMen = () => {
        history.push({pathname: "/rate", state: {gender: "m"}});
    }

    const handleClickWomen = () => {
        history.push({pathname: "/rate", state: {gender: "f"}});
    }

    const handleClickLeaderboard = () => {
        history.push({pathname: "/leaderboard", state: {gender: "f"}});
    }


    return (
        <div>
            <header className="App-header">
                <h1>Retouch Rating</h1>
            </header>

            <Container fluid>
                <Row>
                    <Col className="caption">
                        Who would you like to rate?
                    </Col>
                </Row>
                <div className="divider"/>
                <Row>
                    <Col>
                        <Fab variant="extended" color="primary" aria-label="add" onClick={handleClickMen}
                        >
                            <NavigationIcon/>
                            Men
                        </Fab>
                    </Col>
                    <div className="divider"/>
                    <Col>
                        <Fab variant="extended" color="primary" aria-label="add" onClick={handleClickWomen}
                        >
                            <NavigationIcon/>
                            Women
                        </Fab>
                    </Col>
                    <div className="divider-big"/>

                    <Col>
                        <Fab variant="extended" color="primary" aria-label="add" onClick={handleClickLeaderboard}
                        >
                            <NavigationIcon/>
                            Leaderboard
                        </Fab>
                    </Col>
                    <div className="divider-big"/>

                    <Col className="caption">
                        What should i do?
                        <div className="divider"/>

                        <div className="desc">
                            Rate the people based on their attractiveness in the current image.
                            Simply click the image of the person that is more attractive to you.
                        </div>
                        <div className="divider"/>

                    </Col>
                    <div className="divider-big"/>

                    <Col className="caption">
                        Who am I rating?
                        <div className="divider"/>

                        <div className="desc">
                            All faces are computer generated. These people don't actually exist.
                        </div>
                        <div className="divider"/>

                    </Col>
                    <div className="divider-big"/>

                    <Col className="caption">
                        <img alt="But why?"
                             src="https://media1.tenor.com/images/0a74922439d02f6426347e15929ff0f4/tenor.gif?itemid=13199396"
                             width="300"/>
                        <div className="divider"/>

                        <div className="desc">
                            Retouch aims to automatically beautify faces on images. In order to do that, a dataset of
                            labeled faces is needed.
                            By rating faces, you improove the dataset and generate a database of which faces are
                            attractive and which faces are less attractive.

                        </div>
                        <div className="divider"/>

                        <a className="link" href="https://github.com/ju-leon/RetouchML">Source code</a>
                        <div className="divider-big"/>

                    </Col>
                </Row>
                <div className="divider-big"/>

            </Container>

        </div>
    );


}

export default Home;
