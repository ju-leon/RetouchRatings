import React, {Component} from "react";
import {storageRef, storage, database} from "./config/config";
import './FaceImage.css';


class FaceImage extends Component {

    constructor() {
        super();
        this.state = {url: "Halu", img: ""};
    }

    componentDidMount() {
        console.log(this.props)
        const ref = storage.ref('pics/' + this.props.images[this.props.index] + ".png");
        ref.getDownloadURL().then(url => this.setState({url: url}));
    }

    render() {

        return (
            <div class="container">
                <img alt="Hallo" src={this.state.url} width="300"/>
                <div className="middle">
                    <div>
                        <div className="fill" onClick={() => this.imageClick()}/>
                        <img className="test" src="like512.png" alt="my image" width="150" onClick={this.imageClick}/>
                    </div>
                </div>
                {this.state.img}
            </div>
        );
    }

    imageClick() {

        var ratingsRef = database.collection("ratings");

        ratingsRef.add({
            winner: this.props.images[this.props.index],
            looser: this.props.images[1 - this.props.index]
        })
    }

}

export default FaceImage;
