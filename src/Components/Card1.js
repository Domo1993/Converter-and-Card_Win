import React, { Component } from 'react';
// Used for flipping card animation.
import ReactCardFlip from 'react-card-flip';
import './Task9CSS/cardStyle.css';
import Image from './Images/cardBackground.jpg';

class Card1 extends Component {
    constructor() {
        super();
        this.state = {
            // This keeps the card facing the front
            isFlipped: false,
        };
        // Binding the state
        this.handleClick = this.handleClick.bind(this);
    }

    // This function below prompts the user to 'try again' or 'quit' and then depending on their choice will either refresh the page or go the home page.
    tryOrQuit = (event) => {
        event = prompt(this.props.winOrLose + "\n\n1. Try again?\n2. Quit?", "Choose 1 or 2 and enter here.");
        if (event == 1) {
            window.location.reload();
        } else {
            window.location.pathname = "/";
        }
    };

    // This function changes the state of the card and also calls a timed function
    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
        // this function calls "tryOrQuit" function at a specific time (200 millieseconds in this case)
        setTimeout(this.tryOrQuit, 200);

    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
          {/*This is the front part of the card with the image*/}
              <div className="cardBox" key="front" onClick={this.handleClick}>
                <img className="images" src={Image} alt="Card background"/>
              </div>
            {/*This is the back of the card with the text saying that the user either won or lost*/}
              <div className="cardBox" key="back">
                <h3>{this.props.name}</h3>
              </div>
            </ReactCardFlip>
        )
    }
}

export default Card1;