import React, { useState, Component, Fragment } from 'react';
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
		{ year: '2020', make: 'car', model: 1, isWinterTires: 'yes', vehicleUsage: '', avgKMPerYear: '' },
		{ year: '2020', make: 'car', model: 1, isWinterTires: 'yes', vehicleUsage: '', avgKMPerYear: '' }
	]);
	const [vehiclePill, setVehiclePill] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleInputChange = (index, event) => {
		const values = [...vehicleForms];
        if (event.target.name === 'isWinterTires') {
			values[index].isWinterTires = event.target.innerHTML;			
		} else {
			values[index][event.target.name] = event.target.value;
		}
		setVehicleFormValue(values);		
	}

	const handleSave = (event, index) => {
	    if (index <= (vehicleForms.length-1)) {
	        const updateValue = {...vehicleForms[index], index: index};
            setVehiclePill([...vehiclePill, updateValue]);
	    }
	    if (index+1 != vehicleForms.length) {
	        setCurrentIndex(index+1);
	    }
	}
	
	return(
	    <>
	    <div className="pill-container">
            {vehiclePill.map((vehicle, index) => (
                <div key={`${vehicle}~${index}`}>
                    <span>{vehicle.model}</span>
                    <span>{vehicle.make}</span>
                </div>
            ))}
	    </div>

		<Container className="global-padding started-container">
			{vehicleForms.map((inputField, index) => (
			  	<Fragment key={`${inputField}~${index}`}>
                    { (currentIndex === index) &&
                    <Fragment>
                        <span>TELL US ABOUT YOUR {index+1} VEHICLE</span>
                        <span className="pull-right">Vehicle {index+1} of {vehicleForms.length}</span>
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
                                    <Form.Control name="make" as="select" onChange={(event) => handleInputChange(index, event)}>
                                      <option>Mercedes Benz</option>
                                      <option>Bhugati</option>
                                      <option>2017</option>
                                      <option>2016</option>
                                      <option>2016</option>
                                    </Form.Control>
                                  </Form.Group>

                                  <Form.Group controlId="formBasicPassword">
                                    <Form.Label>MODEL</Form.Label>
                                    <Form.Control name="model" as="select" onChange={(event) => handleInputChange(index, event)}>
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
                        <div className="pull-right">
                            <Button variant="primary" type="submit" className="goback-btn">
                                GO BACK
                            </Button>
                            <Button variant="primary" type="submit" className="save-btn" onClick={() => handleSave(event, index)}>
                                Save & Continue ->
                            </Button>
                        </div>
                    </Fragment>
                    }
				</Fragment>
			  ))}			
		</Container>
		</>
	)
}

export default VehicleInformation;