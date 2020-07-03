import React, { useState, Component } from 'react';
import { Container, Form, Row, Col, InputGroup, Button, FormControl, ButtonGroup } from 'react-bootstrap';
import PolicyTypeSelection from './policyTypeSelection';
import TextInput from 'rv-react-test/TextInput';
import '../styles/policy.css';

function PolicyType() {		
	console.log('Cmoponent rerender');
	const [form, setFormValue] = useState({
		postalCode: '',
		insuranceType: 'car',
		noOfVehicles: 1,
		noOfDrivers: 1,
		houseType: 'Homeowner'
	});
	const [textInputModel, setTextInputModel] = useState('');

	const updateField = ((event) => {
		setFormValue({
			...form,
			[event.target.name]: event.target.value
		})
		console.log(form);
	});

	const handleClick = (event) => {
		const newEmail = event.target.value;
		setTextInputModel(event.target.value);
	};
	
	return (
		<>
			<Container className="global-padding">
			  <Row>
			    <Col className="started-container">
			    	<TextInput value={textInputModel} label='My Name' onChange={setTextInputModel} />
			    	<Form>
					  <Form.Group controlId="formBasicEmail">
					    <Form.Label>POSTAL CODE</Form.Label>
					    <Form.Control type="text" placeholder="Enter Postal Code"
					     name="postalCode" value={form.postalCode} onChange={updateField} />					    
					  </Form.Group>

					  <Form.Group controlId="formBasicPassword">
					    <Form.Label>NUMBER OF VEHICLES</Form.Label>
					    <InputGroup>
						    <ButtonGroup aria-label="Basic example">
						    	<Button style={{width: "120px", height: "60px"}} onClick={updateField} name="insuranceType" value="car" active={form.insuranceType === 'car'}>Car</Button>
            					<Button style={{width: "120px", height: "60px"}} onClick={updateField} name="insuranceType" value="home" active={form.insuranceType === 'home'}>Home</Button>
            					<Button style={{width: "160px", height: "60px"}} onClick={updateField} name="insuranceType" value="both" active={form.insuranceType === 'both'}>Combined for more savings</Button>
							</ButtonGroup>
						</InputGroup>
					  </Form.Group>

					  <PolicyTypeSelection 
					  		updateFieldValue={updateField} 
					  		form={form} />

					  <Button variant="primary" type="submit" className="save-btn">
					    Save & Continue ->
					  </Button>
					</Form>
			    </Col>
			    <Col>
			    	<div>3 Simple steps to get a quote</div>
			    </Col>
			  </Row>			  
			</Container>
		</>
	)
}

export default PolicyType;