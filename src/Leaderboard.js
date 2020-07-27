import React, {Component} from "react";
import FaceImage from "./FaceImage";
import {Col} from "reactstrap";
import PicRow from "./PicRow";


class Leaderboard extends Component {

    constructor() {
        super();
        this.state = {men: [], women: [], women_end: [], men_end: []};
    }


    componentDidMount() {

        fetch(process.env.REACT_APP_API_URL + "leaderboard").then(res => res.json()).then(querySnapshot => {
            this.setState({
                men: querySnapshot.men,
                men_end: querySnapshot.men_end,
                women: querySnapshot.women,
                women_end: querySnapshot.women_end,
            });
        })
    }

    render() {
        if (this.state.men == []) {
            return <div/>
        }

        return (
            <div className="desc">
                <header className="App-header">
                    <h1>Leaderboard</h1>
                </header>

                Women:
                <div className="divider"/>

                <PicRow images={this.state.women}/>

                <div className="divider"/>

                Women End:
                <div className="divider"/>

                <PicRow images={this.state.women_end}/>

                <div className="divider"/>

                <div className="divider"/>

                Men:
                <div className="divider"/>

                <PicRow images={this.state.men}/>

                <div className="divider"/>

                Men End:
                <div className="divider"/>

                <PicRow images={this.state.men_end}/>

                <div className="divider"/>
                <div className="divider"/>


            </div>
        );
    }


}

export default Leaderboard;
