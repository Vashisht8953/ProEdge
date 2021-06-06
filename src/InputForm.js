import axios from 'axios';
import React, {Component} from 'react';
import {Card, Form, Col, Button} from 'react-bootstrap';
//import axios from 'axios';

export default class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {    
        this.setState({value: event.target.value});  
    }
    async getData(roll){
        const res = await axios(`http://proedge.me/test.php?rollnumber=${roll}`);
        return await res.json();
    }

    handleSubmit(event) {
        let inputNumber = this.state.value;
        let strNumber = inputNumber.split(',');
        for(let i = 0; i < strNumber.length; i++) {
            this.getData(strNumber);
        }
        event.preventDefault();
    }

	render() {
		return (
			<div style={{margin: 50}}>
				<Card>
				<Card.Header> Enter A Roll Number or Comma Separated Roll Numbers </Card.Header>
  				<Form onSubmit={this.handleSubmit}>
  					<Card.Body>
  						<Form.Group>
	  						<Form.Row>
	    						<Col>
	      							<Form.Control required
	      							value={this.state.value}
	      							onChange={this.handleChange}
	      							type="text" 
	      							placeholder="Enter Roll Number" />
	    						</Col>
	  						</Form.Row>
	  					</Form.Group>
  					</Card.Body>
  				 	<Card.Footer style={{"textAlign":"center"}}>
  						<Button size="sm" variant="success" type="submit">
    					    Check Result
 						</Button>
  					</Card.Footer>
  				</Form>
  			</Card>
			</div>
		);
	}
}
