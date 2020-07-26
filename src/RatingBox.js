import React, {Component} from "react";
import FaceImage from "./FaceImage";
import {Col} from "reactstrap";


class RatingBox extends Component {

    constructor() {
        super();
        this.state = {url: "Halu", images: []};
    }


    componentDidMount() {

        try{
            fetch(process.env.REACT_APP_API_URL + "random_pair?gender=" + this.props.location.state.gender).then(res => res.json()).then(querySnapshot => {
                console.log(querySnapshot)
                querySnapshot.forEach(doc => {
                    // doc.data() is never undefined for query doc snapshots
                    this.setState(prevState => ({
                        images: [...prevState.images, doc.id]
                    }))
                });
            })
        } catch (e) {
            this.props.history.push("/");
        }
    }

    render() {
        if (this.state.images.length != 2) {
            return <div/>
        }

        return (
            <div>
                <div className="divider"/>

                <FaceImage images={this.state.images} index="0"/>
                <FaceImage images={this.state.images} index="1"/>
                <div className="divider"/>

            </div>
        );
    }


}

export default RatingBox;
