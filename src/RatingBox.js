import React, {Component} from "react";
import {storageRef, storage, database} from "./config/config";
import FaceImage from "./FaceImage";


class RatingBox extends Component {

    constructor() {
        super();
        this.state = {url: "Halu", images: []};
    }

    componentDidMount() {
        database.collection('images/')
            .orderBy("last_edited", "asc")
            .limit(2).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    this.setState(prevState => ({
                        images: [...prevState.images, doc.id]
                    }))
                });
            })
    }

    render() {
        if (this.state.images.length != 2) {
            return <div/>
        }

        return (
            <div>
                <FaceImage images={this.state.images} index="0"/>
                <FaceImage images={this.state.images} index="1"/>
            </div>
        );
    }


}

export default RatingBox;
