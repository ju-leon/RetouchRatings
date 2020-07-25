import React, {Component} from "react";
import FaceImage from "./FaceImage";


class RatingBox extends Component {

    constructor() {
        super();
        this.state = {url: "Halu", images: []};
    }

    componentDidMount() {

        fetch(process.env.REACT_APP_API_URL + "random_pair").then(res => res.json()).then(querySnapshot => {
            console.log(querySnapshot)
            querySnapshot.forEach(doc => {
                // doc.data() is never undefined for query doc snapshots
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
