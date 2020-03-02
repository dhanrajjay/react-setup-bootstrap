import React, { useState, Component } from 'react';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';

export default function Agency() {	
	// Email Validation
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState('');
	const handleEmail = (event) => {
		setEmail(event.currentTarget.value);
		setEmailEmpty('');
		validateEmail(event.currentTarget.value);
	};
	const validateEmail = (value, initialValue) => {
	  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  const error = regEx.test(value) ? "" : "You must enter a valid email address";
	  if (!initialValue) {
	  	setEmailError(error);
	  }	  
	  return error;
	};

	// Phone Validation
	const [phoneNumber, setPhoneNumber] = useState('');
	const [phoneNumberError, setPhoneNumberError] = useState('');
	const hanldePhoneNumber = (event) => {
		setPhoneNumber(event.currentTarget.value);
		setPhoneNumberEmpty('');
		validatePhoneNumber(event.currentTarget.value);
	};
	const validatePhoneNumber = (value, initialValue) => {
		const error = value && !/^(0|[1-9][0-9]{9})$/i.test(value) ? "Invalid phone number, must be 10 digits" : "";
		if (!initialValue) {
		  setPhoneNumberError(error);
		}	  		
		return error;
	};

	// Postal code Validation
	const [postalCode, setPostalCode] = useState('');
	const [postalCodeError, setPostalCodeError] = useState('');
	const hanldePostalCode = (event) => {
		setPostalCode(event.currentTarget.value);
		setPostalCodeEmpty('');
		validatePostalCode(event.currentTarget.value);
	};
	const validatePostalCode = (value) => {
		const error = value ? "" : "Enter a postal code";
		setPostalCodeError(error);
		return error;
	};

	// Empty Form Error
	const [emailEmpty, setEmailEmpty] = useState('');
	const [phoneNumberEmpty, setPhoneNumberEmpty] = useState('');
	const [postalCodeEmpty, setPostalCodeEmpty] = useState('');
	const handleEmptyError = (fn, event) => {
		if (!event.target.value ) {
			fn('Field cannot be empty');
		} else {
			fn('');
		}
	}

	// Submit Button
	const handleSubmit = () => {
		const isValidEmail = validateEmail(email, true);
		const isValidPhoneNumber = validatePhoneNumber(phoneNumber, true);		
		return !(!isValidEmail.length && !isValidPhoneNumber.length);
	}	

	return(
		<Form noValidate className="global-padding">
	      	<Form.Row>
		        <Form.Group as={Col} md="4">
	        		<Form.Label>EMAIL ADDRESS</Form.Label>
					<Form.Control type="text" id="email" style={{width: "70%"}} name="email" value={email} onChange={handleEmail} 
					onBlur={() => handleEmptyError(setEmailEmpty, event)} isInvalid={emailError || emailEmpty} />
					<Form.Control.Feedback type="invalid">
	                  {emailError || emailEmpty}
	                </Form.Control.Feedback>
		        </Form.Group>
		        <Form.Group as={Col} md="4">
	        		<Form.Label>POSTAL CODE</Form.Label>
					<Form.Control type="text" id="postalCode" style={{width: "70%"}} name="postalCode" value={postalCode} onChange={hanldePostalCode} 
						onBlur={() => handleEmptyError(setPostalCodeEmpty, event)} isInvalid={postalCodeError || postalCodeEmpty} />
					<Form.Control.Feedback type="invalid">
	                  {postalCodeError || postalCodeEmpty}
	                </Form.Control.Feedback>
					<Form.Label>PHONE NUMBER</Form.Label>
					<Form.Control type="text" id="phoneNUmber" style={{width: "70%"}} name="phoneNumber" value={phoneNumber} onChange={hanldePhoneNumber} 
						onBlur={() => handleEmptyError(setPhoneNumberEmpty, event)} isInvalid={phoneNumberError || phoneNumberEmpty} />
					<Form.Control.Feedback type="invalid">
	                  {phoneNumberError || phoneNumberEmpty}
	                </Form.Control.Feedback>	
		        </Form.Group>
	       </Form.Row>
	       <div>
				<Button type="submit">SEARCH</Button>
			</div>       
		</Form>
	)
}