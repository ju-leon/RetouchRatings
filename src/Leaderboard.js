import React, {Component} from "react";
import FaceImage from "./FaceImage";
import {Col} from "reactstrap";
import PicRow from "./PicRow";


class Leaderboard extends Component {

    constructor() {
        super();
        this.state = {men: [], women: []};
    }


    componentDidMount() {

        fetch(process.env.REACT_APP_API_URL + "leaderboard").then(res => res.json()).then(querySnapshot => {
            console.log(querySnapshot)
            this.setState({men: querySnapshot.men, women: querySnapshot.women});
        })
    }

    render() {
        if (this.state.men == []) {
            return <div/>
        }

        console.log(this.state.men)
        return (
            <div className="desc">
                <header className="App-header">
                    <h1>Leaderboard</h1>
                </header>

                Women:
                <div className="divider"/>

                <PicRow images={this.state.women}/>

                <div className="divider"/>

                <div className="divider"/>

                Men:
                <div className="divider"/>

                <PicRow images={this.state.men}/>

                <div className="divider"/>


            </div>
        );
    }


}

export default Leaderboard;
