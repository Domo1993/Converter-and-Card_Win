import React, { Component } from 'react';
import Card1 from '../Components/Card1';
import Card2 from '../Components/Card2';
import Card3 from '../Components/Card3';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Task9CSS/cardStyle.css';

// An array of strings with winning and losing statements that will be used on the back of the card
var myCardText = ["You Win a lifetime supply of toilet paper!","Try again.","Better Luck next time...","You lose unfortunately...",
					"You Win a prize of R5000!","Bad luck, no prize...", "You Win the jackpot prize!","Sorry, try again", "No prize this time..."]

// Randomizing the text that is chosen to be placed on the back of the card
var randomValue = myCardText[Math.floor(myCardText.length * Math.random())];

// This component puts all 3 card components together and also sends random text to each card after refreshing the page.
class CardGame extends Component {

	render() {
		return (
			<div>
				<Container className="allCards">
					<Row>
						<Col>
							<h1>Card Game</h1>
							<p>Click on a card and you could win a prize!</p>
						</Col>
					</Row>
					<Row>
						<Col>
							{/*Random value is inserted using props in the card components*/}
							<Card1 name={randomValue} winOrLose={randomValue}/>
						</Col>
						<Col>
							<Card2 name={randomValue} winOrLose={randomValue}/>
						</Col>
						<Col>
							<Card3 name={randomValue} winOrLose={randomValue}/>
						</Col>	
					</Row>
					<Row>

					</Row>
				</Container>
			</div>
		);
	}
}

export default CardGame;