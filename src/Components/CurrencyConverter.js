import React from 'react';
// Using react bootstrap for a grid system
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Using some external css to style the page
import './Task9CSS/converterStyle.css';

class CurrencyConverter extends React.Component {
   
   constructor(props) {
       super(props);
       // Starting the value at an empty string.
       this.state = {value: ''};
   }

   myChangeHandler = (event) => {
    // Changes the state and is used for the outputted currency rates.
       this.setState({value: event.target.value});
   }

   render() {
       return (
       	<Container className="converterBackground">
          <Row>
            <Col>
              <h1>Currency Converter</h1>
            </Col>
          </Row>

            <Row>
            <Col>
              <h6>Enter an amount in USD(United States Dollar) to have it Converted to ZAR, EURO and Pound.</h6>
            </Col>
            </Row>

          <form>
          <Row>
            <Col>
                <label>$</label>
              {/*As soon as information is inputted the function "myChangeHandler" is called*/}
                <input type="number" onChange={this.myChangeHandler}/>
            </Col>
          </Row>

          <Row>
            <Col>
              <h5 className="headings">The amount in South African Rand is:</h5>
            </Col>        
            <Col>
              {/*Whenever a value is inputted in the input tag that value will be sent here, and then gets multiplied by the respective currency rate*/}
              <h5 className="currency">R{((this.state.value)* 15.28).toFixed(2)}</h5>
            </Col>
          </Row>

          <Row>
            <Col>
              <h5 className="headings">The amount in Pound sterling is:</h5>
            </Col>
            <Col>
              {/*Whenever a value is inputted in the input tag that value will be sent here, and then gets multiplied by the respective currency rate*/}
              <h5 className="currency">£{((this.state.value)* 0.83).toFixed(2)}</h5>
            </Col>
          </Row>

          <Row>
            <Col>
              <h5 className="headings">The amount in Euro is:</h5>
            </Col>
            <Col>
              {/*Whenever a value is inputted in the input tag that value will be sent here, and then gets multiplied by the respective currency rate*/}
              <h5 className="currency">€{((this.state.value)* 0.90).toFixed(2)}</h5>
            </Col>
          </Row>
          </form>

        </Container>
       )
   }
}

export default CurrencyConverter;