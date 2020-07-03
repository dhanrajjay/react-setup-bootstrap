import React, { useState, Component } from 'react';
import { Container, Form, Row, Col, InputGroup, Button, FormControl, ButtonGroup } from 'react-bootstrap';

function PolicyHolder() {	
	return(
		<>
			<PolicyHolderComponent />
		</>
	)
}

function PolicyHolderComponent() {

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
						    <Form.Label>FIRST NAME</Form.Label>
						    <Form.Control type="text" placeholder="Enter First Name"
						    	name="firstName" value={inputField.firstName} onChange={(event) => handleInputChange(index, event)} />
						  </Form.Group>

						  <Form.Group controlId="formBasicPassword">
						    <Form.Label>EMAIL ADDRESS</Form.Label>
						    <Form.Control type="email" placeholder="Enter Email Address"
						    	name="email" value={inputField.email} onChange={(event) => handleInputChange(index, event)} />
						  </Form.Group>

						  <Form.Group controlId="formBasicPassword">
						    <Form.Label>PHONE NUMBER</Form.Label>
						    <Form.Control type="text" placeholder="Enter Phone Number"
						    	name="phoneNumber" value={inputField.phoneNumber} onChange={(event) => handleInputChange(index, event)} />
						  </Form.Group>
						</Form>
				    </Col>
				    <Col>
				    	<Form>						  
						  <Form.Group controlId="formBasicPassword">
						    <Form.Label>YEARS LICENSED IN CANADA</Form.Label>
						    <Form.Control name="licensedInCanada" as="select" onChange={(event) => handleInputChange(index, event)}
							    value={inputField.licensedInCanada}>
						      	<option value="0">0</option>
						      	<option value="1">1</option>
						      	<option value="2">2</option>
						      	<option value="3">3</option>
						      	<option value="4">4</option>
						    </Form.Control>
						  </Form.Group>

						  <Form.Group controlId="formBasicEmail">
						    <Form.Label>GENDER</Form.Label>
						    <InputGroup>
							    <ButtonGroup aria-label="Basic example">
							    	<Button style={{width: "120px"}} onClick={(event) => handleInputChange(index, event)} 
							    		name="gender" active={inputField.gender === 'male'}>Male</Button>
							    	<Button style={{width: "120px"}} onClick={(event) => handleInputChange(index, event)} 
							    		name="gender" active={inputField.gender === 'female'}>Female</Button>
								</ButtonGroup>
							</InputGroup>
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

export default PolicyHolder;