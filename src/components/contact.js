import React, { useState, Component } from 'react';
import { Container, Form, Row, Col, InputGroup, Button, FormControl, ButtonGroup } from 'react-bootstrap';

function ContactUS() {
	
	return (
		<>
			<Container className="global-padding">
			  <Row>
			    <Col className="started-container">
			    	<Form>
					  <Form.Group controlId="formBasicEmail">
					    <Form.Label>POSTAL CODE</Form.Label>
					  </Form.Group>

					  <Form.Group controlId="formBasicPassword">
					    <Form.Label>NUMBER OF VEHICLES</Form.Label>
					    <InputGroup>
						    <ButtonGroup aria-label="Basic example">						    	
							</ButtonGroup>
						</InputGroup>
					  </Form.Group>

					  
					  <Button variant="primary" type="submit" className="save-btn">
					    Save & Continue ->
					  </Button>
					</Form>
			    </Col>
			    <Col className="started-container">
			    	WHAT'S NEXT
			    </Col>
			  </Row>			  
			</Container>
		</>
	)
}

export default ContactUS;