import React, { useState, Component } from 'react';
import { Container, Form, Row, Col, InputGroup, Button, FormControl, ButtonGroup } from 'react-bootstrap';

function PropertyInformation() {	
	return(
		<>
			<PropertyInformationComponent />
		</>
	)
}

function PropertyInformationComponent() {

	const [propertyForms, setPropertyFormValue] = useState([
		{ 	
			homeDescription: '2020',
			ageOfDwelling: 'car',
			homeMovedInto: 1,
			ageOfHomeRoof: 'yes',
			totalSquareFoot: '',
			percentageOfApproximate: '',
			oilTank: '',
			isBurningStove: '',
			mortages: ''
			fireHydrant: ''
		}
	]);	

	const handleInputChange = (index, event) => {
		const values = [...propertyForms];		
		if (event.target.name === 'isWinterTires') {
			values[index].isWinterTires = event.target.innerHTML;			
		} else if (event.target.name === 'yearList') {
			values[index].year = event.target.value;
		}		
		setVehicleFormValue(values);		
	}

	return(
		<Container className="global-padding started-container">
			{propertyForms.map((inputField, index) => (
			  	<div key={`${inputField}~${index}`}>
			  	<span>TELL US ABOUT YOUR {index+1} PROPERTY</span>
				<span>Vehicle {index+1} of {propertyForms.length}</span>	
				<Row>
					<Col>
					  	<Form>
						  <Form.Group controlId="formBasicEmail">
						    <Form.Label>DESCRIBE YOUR NAME</Form.Label>
						    <Form.Control name="homeDescription" as="select" onChange={(event) => handleInputChange(index, event)}
							    value={inputField.homeDescription}>
						      	<option value="0">0</option>
						      	<option value="1">1</option>
						      	<option value="2">2</option>
						      	<option value="3">3</option>
						      	<option value="4">4</option>
						    </Form.Control>
						  </Form.Group>

						  <Form.Group controlId="formBasicPassword">
						    <Form.Label>AGE OF DWELLING (0-99)</Form.Label>
						    <Form.Control name="ageOfDwelling" as="select" onChange={(event) => handleInputChange(index, event)}
							    value={inputField.ageOfDwelling}>
						      	<option value="0">0</option>
						      	<option value="1">1</option>
						      	<option value="2">2</option>
						      	<option value="3">3</option>
						      	<option value="4">4</option>
						    </Form.Control>
						  </Form.Group>

						  <Form.Group controlId="formBasicPassword">
						    <Form.Label>DATE MOVED INTO HOME</Form.Label>
						    <Form.Control name="homeMovedInto" as="select" onChange={(event) => handleInputChange(index, event)}
							    value={inputField.homeMovedInto}>
						      	<option value="0">0</option>
						      	<option value="1">1</option>
						      	<option value="2">2</option>
						      	<option value="3">3</option>
						      	<option value="4">4</option>
						    </Form.Control>
						  </Form.Group>

						  <Form.Group controlId="formBasicPassword">
						    <Form.Label>AGE OF HOME'S ROOF</Form.Label>
						    <Form.Control name="ageOfHomeRoof" as="select" onChange={(event) => handleInputChange(index, event)}
							    value={inputField.ageOfHomeRoof}>
						      	<option value="0">0</option>
						      	<option value="1">1</option>
						      	<option value="2">2</option>
						      	<option value="3">3</option>
						      	<option value="4">4</option>
						    </Form.Control>
						  </Form.Group>

						  <Form.Group controlId="formBasicPassword">
						    <Form.Label>TOTAL SQUARE FOOTAGE OF HOME, EXCLUDING BASEMENT (800 MIN)</Form.Label>
						    <Form.Control type="text"
						    	name="totalSquareFoot" value={inputField.totalSquareFoot} onChange={(event) => handleInputChange(index, event)} />
						  </Form.Group>

						  <Form.Group controlId="formBasicPassword">
						    <Form.Label>PERCENTAGE OF BASEMENT IS FINISHED (APPROXIMATE)</Form.Label>
						    <Form.Control name="percentageOfApproximate" as="select" onChange={(event) => handleInputChange(index, event)}
							    value={inputField.percentageOfApproximate}>
						      	<option value="0">0</option>
						      	<option value="1">1</option>
						      	<option value="2">2</option>
						      	<option value="3">3</option>
						      	<option value="4">4</option>
						    </Form.Control>
						  </Form.Group>
						</Form>
				    </Col>
				    <Col>
				    	<Form>						  
						  <Form.Group controlId="formBasicPassword">
						    <Form.Label>DO YOU HAVE AN OIL TANK?</Form.Label>
						    <InputGroup>
							    <ButtonGroup aria-label="Basic example">
							    	<Button style={{width: "120px"}} onClick={(event) => handleInputChange(index, event)} 
							    		name="gender" active={inputField.gender === 'male'}>Male</Button>
							    	<Button style={{width: "120px"}} onClick={(event) => handleInputChange(index, event)} 
							    		name="gender" active={inputField.gender === 'female'}>Female</Button>
								</ButtonGroup>
							</InputGroup>
						  </Form.Group>

						  <Form.Group controlId="formBasicEmail">
						    <Form.Label>DOES YOUR HOME HAVE A WOOD BURNING STOVE?</Form.Label>
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

export default PropertyInformation;