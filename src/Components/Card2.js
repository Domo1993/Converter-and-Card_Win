import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import './Task9CSS/cardStyle.css';
import Image from './Images/cardBackground.jpg';

class Card2 extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    tryOrQuit = (event) => {
        event = prompt(this.props.winOrLose + "\n\n1. Try again?\n2. Quit?", "Choose 1 or 2 and enter here.");
        if (event == 1) {
            window.location.reload();
        } else {
            window.location.pathname = "/";
        }
    };

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
        setTimeout(this.tryOrQuit, 200);
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
              <div className="cardBox" key="front" onClick={this.handleClick}>
                <img className="images" src={Image} alt="Card background"/>
              </div>
       
              <div className="cardBox" key="back">
                <h3>{this.props.name}</h3>
              </div>
            </ReactCardFlip>
        )
    }
}

export default Card2;