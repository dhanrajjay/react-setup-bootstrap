import React, { component } from 'react';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';

function AgeComponent(props) {	
	const isAgeDropDown = props.isAgeDropDown;	
	return (
		<div>		
		{ isAgeDropDown ?
			<Form.Group as={Col} md="4">
	    		<Form.Label>Age</Form.Label>
				<Form.Control type="text" />
	        </Form.Group> 
	        : 
	        <Form.Group as={Col} md="4">
	    		<Form.Label>Age Dropdwon</Form.Label>
				<Form.Control type="text" />
	        </Form.Group>
		}
		</div>
	)
}

export default AgeComponent;