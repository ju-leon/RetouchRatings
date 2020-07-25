import React, {Component} from "react";
import {storageRef, storage, database} from "./config/config";
import './FaceImage.css';
import * as firebase from "firebase";

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

class FaceImage extends Component {

    constructor() {
        super();
        this.state = {url: "Halu", img: ""};
    }

    componentDidMount() {
        console.log(this.props)
        const ref = storage.ref('pics/' + this.props.images[this.props.index] + ".jpeg");
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

        let ratingsRef = database.collection("ratings");

        ratingsRef.add({
            winner: this.props.images[this.props.index],
            looser: this.props.images[1 - this.props.index]
        })

        let imagesRef = database.collection("images");


        imagesRef.doc(this.props.images[0]).set(
            {
                last_edited: firebase.firestore.FieldValue.serverTimestamp()
            }
        )

        imagesRef.doc(this.props.images[1]).set(
            {
                last_edited: firebase.firestore.FieldValue.serverTimestamp() + getRandomInt(10000)
            }
        )


    }

}

export default FaceImage;
