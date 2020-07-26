import React, {Component} from "react";
import FaceImage from "./FaceImage";
import {Col} from "reactstrap";
import {Button} from "@material-ui/core";


class PicRow extends Component {

    constructor() {
        super();
        this.state = {images: []}
    }


    componentDidMount() {
        this.setState({images: this.props.images});
        console.log(this.props.images)
    }

    render() {
        return this.props.images.map(item => {
            return <img alt="img" src={process.env.REACT_APP_API_URL + "image?id=" + item} width="300"/>
        })
    }


}

export default PicRow;
