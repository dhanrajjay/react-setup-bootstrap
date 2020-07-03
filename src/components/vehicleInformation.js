import React, { useState, Component } from 'react';
import { Container, Form, Row, Col, InputGroup, Button, FormControl, ButtonGroup } from 'react-bootstrap';

function VehicleInformation() {	
	return (
		<>
			<VehicleComponent />	
		</>
	)
}

function VehicleComponent() {

	const [vehicleForms, setVehicleFormValue] = useState([
		{ year: '2020', make: 'car', model: 1, isWinterTires: 'yes', vehicleUsage: '', avgKMPerYear: '' }
	]);	

	const handleInputChange = (index, event) => {
		const values = [...vehicleForms];		
		if (event.target.name === 'isWinterTires') {
			values[index].isWinterTires = event.target.innerHTML;			
		} else if (event.target.name === 'yearList') {
			values[index].year = event.target.value;
		}		
		setVehicleFormValue(values);		
	}
	
	return(
		<Container className="global-padding started-container">
			{vehicleForms.map((inputField, index) => (
			  	<div key={`${inputField}~${index}`}>	
				  <span>TELL US ABOUT YOUR {index+1} VEHICLE</span>
				  <span>Vehicle {index+1} of {vehicleForms.length}</span>
				  <Row>
				    <Col>
				    	<Form>
						  <Form.Group controlId="formBasicEmail">
						    <Form.Label>YEAR</Form.Label>
						    <Form.Control name="yearList" as="select" onChange={(event) => handleInputChange(index, event)}
						    	value={inputField.year}>
						    	<option value="2020">2020</option>
						      	<option value="2019">2019</option>
						      	<option value="2018">2018</option>
						      	<option value="2017">2017</option>
						      	<option value="2016">2016</option>
						      	<option value="2016">2016</option>
						    </Form.Control>
						  </Form.Group>

						  <Form.Group controlId="formBasicPassword">
						    <Form.Label>MAKE</Form.Label>
						    <Form.Control as="select">
						      <option>Mercedes Benz</option>
						      <option>Bhugati</option>
						      <option>2017</option>
						      <option>2016</option>
						      <option>2016</option>
						    </Form.Control>
						  </Form.Group>

						  <Form.Group controlId="formBasicPassword">
						    <Form.Label>MODEL</Form.Label>
						    <Form.Control as="select">
						      <option>2019</option>
						      <option>2018</option>
						      <option>2017</option>
						      <option>2016</option>
						      <option>2016</option>
						    </Form.Control>
						  </Form.Group>
						</Form>
				    </Col>
				    <Col>
				    	<Form>
						  <Form.Group controlId="formBasicEmail">
						    <Form.Label>DO YOU HAVE WINTER TRIES?</Form.Label>
						    <InputGroup>
							    <ButtonGroup aria-label="Basic example">
							    	<Button style={{width: "120px"}} onClick={(event) => handleInputChange(index, event)} 
							    		name="isWinterTires" active={inputField.isWinterTires === 'yes'}>Yes</Button>
							    	<Button style={{width: "120px"}} onClick={(event) => handleInputChange(index, event)}
							    		name="isWinterTires" active={inputField.isWinterTires === 'no'}>No</Button>
								</ButtonGroup>
							</InputGroup>
						  </Form.Group>

						  <Form.Group controlId="formBasicPassword">
						    <Form.Label>WHAT DO YOU USE YOUR VEHICLE FOR</Form.Label>
						    <Form.Control as="select">
						      <option>Mercedes Benz</option>
						      <option>Bhugati</option>
						      <option>2017</option>
						      <option>2016</option>
						      <option>2016</option>
						    </Form.Control>
						  </Form.Group>

						  <Form.Group controlId="formBasicPassword">
						    <Form.Label>AVERAGE KILOMETRE USAGE PER YEAR</Form.Label>
						    <Form.Control as="select">
						      <option>2019</option>
						      <option>2018</option>
						      <option>2017</option>
						      <option>2016</option>
						      <option>2016</option>
						    </Form.Control>
						  </Form.Group>
						</Form>
				    </Col>
				  </Row>
				  <Button variant="primary" type="submit">
				    GO BACK
				  </Button>
				  <Button variant="primary" type="submit">
				    Save & Continue ->
				  </Button>	
				</div>  
			  ))}			
		</Container>		
	)
}

export default VehicleInformation;