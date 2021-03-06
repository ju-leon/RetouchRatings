import React, {Component} from "react";
import './FaceImage.css';

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

class FaceImage extends Component {

    constructor() {
        super();
        this.state = {url: process.env.REACT_APP_API_URL, img: ""};
    }

    componentDidMount() {
        console.log(this.props)
        this.setState({url: process.env.REACT_APP_API_URL + "image?id=" + this.props.images[this.props.index]})
    }

    render() {
        return (
            <div class="container">
                <img alt="Hallo" src={this.state.url} width="300"/>
                <div className="middle">
                    <div>
                        <div className="fill" onClick={() => this.imageClick()}/>
                        <img src="like512.png" alt="my image" width="150" onClick={this.imageClick}/>
                    </div>
                </div>
                {this.state.img}
            </div>
        );
    }

    async imageClick() {

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                winner: this.props.images[this.props.index],
                looser: this.props.images[1 - this.props.index]
            })
        };
        await fetch(process.env.REACT_APP_API_URL + 'announce_winner', requestOptions)
            .then(console.log("Got result"));

        window.location.reload()

    }

}

export default FaceImage;
