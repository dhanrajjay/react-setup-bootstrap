import React, { useState, Component, Fragment } from 'react';
import { Container, Form, Row, Col, InputGroup, Button, FormControl, ButtonGroup } from 'react-bootstrap';

function DriverInformation() {	
	return(
		<>
			<DriverComponent />
		</>
	)
}

function DriverComponent() {

	const [driverForms, setDriverFormValue] = useState([
		{ 	firstName: '', email: '', phoneNumber: 1, gender: 'male', martialStatus: 'single', licenseType: 'G',
			licensedInCanada: 0, insuredInCanada: 0, majorConviction: 'NO', minorConviction: 'NO', collisions: 'NO'
		},
		{ 	firstName: '', email: '', phoneNumber: 1, gender: 'male', martialStatus: 'single', licenseType: 'G',
            licensedInCanada: 0, insuredInCanada: 0, majorConviction: 'NO', minorConviction: 'NO', collisions: 'NO'
        }
	]);
	const [driverPill, setDriverPill] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
	const innerHTMLComp = {
		isWinterTires: true,
		gender: true,
		licenseType: true,
		majorConviction: true,
		minorConviction: true,
		collisions: true
	};

	const handleInputChange = (index, event) => {
		const values = [...driverForms];
		if (innerHTMLComp[event.target.name]) {
			values[index][event.target.name] = event.target.innerHTML;			
		} else if (event.target.name === 'yearList' || event.target.name === 'martialStatus') {
			values[index].year = event.target.value;
		} else {
			values[index][event.target.name] = event.target.value;
		}		
		setDriverFormValue(values);
		console.log(driverForms);
	}

	const handleSave = (event, index) => {
        if (index <= (driverForms.length-1)) {
            const updateValue = {...driverForms[index], index: index};
            setDriverPill([...driverPill, updateValue]);
        }
        if (index+1 != driverForms.length) {
            setCurrentIndex(index+1);
        }
    }

	return(
	    <>
	        <div className="pill-container">
                {driverPill.map((driver, index) => (
                    <div key={`${driver}~${index}`}>
                        <span>{driver.firstName}</span>
                        <span>{driver.phoneNumber}</span>
                    </div>
                ))}
            </div>
            <Container className="global-padding started-container">
                {driverForms.map((inputField, index) => (
                    <div key={`${inputField}~${index}`}>
                        { (currentIndex === index) &&
                        <Fragment>
                            <span>TELL US ABOUT YOUR {index+1} DRIVER</span>
                            <span className="pull-right">Driver {index+1} of {driverForms.length}</span>
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

                                      <Form.Group controlId="formBasicPassword">
                                        <Form.Label>DATE OF BIRTH</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Phone Number" />
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

                                      <Form.Group controlId="formBasicPassword">
                                        <Form.Label>MARITAL STATUS</Form.Label>
                                        <Form.Control name="martialStatus" as="select" onChange={(event) => handleInputChange(index, event)}
                                            value={inputField.martialStatus}>
                                          <option value="single">Single</option>
                                          <option value="married">Married</option>
                                        </Form.Control>
                                      </Form.Group>
                                    </Form>
                                </Col>
                                <Col>
                                    <Form>
                                      <Form.Group controlId="formBasicEmail">
                                        <Form.Label>LICENSE TYPE</Form.Label>
                                        <InputGroup>
                                            <ButtonGroup aria-label="Basic example">
                                                <Button style={{width: "120px"}} onClick={(event) => handleInputChange(index, event)}
                                                    name="licenseType" active={inputField.licenseType === 'G'}>G</Button>
                                                <Button style={{width: "120px"}} onClick={(event) => handleInputChange(index, event)}
                                                    name="licenseType" active={inputField.licenseType === 'G2'}>G2</Button>
                                                <Button style={{width: "120px"}} onClick={(event) => handleInputChange(index, event)}
                                                    name="licenseType" active={inputField.licenseType === 'G1'}>G1</Button>
                                            </ButtonGroup>
                                        </InputGroup>
                                      </Form.Group>

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

                                      <Form.Group controlId="formBasicPassword">
                                        <Form.Label>YEARS INSURED IN CANADA</Form.Label>
                                        <Form.Control name="insuredInCanada" as="select" onChange={(event) => handleInputChange(index, event)}
                                            value={inputField.insuredInCanada}>
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </Form.Control>
                                      </Form.Group>

                                      <Form.Group controlId="formBasicEmail">
                                        <Form.Label>MAJOR OR CRIMINAL CONVICTIONS SINCE 2014</Form.Label>
                                        <InputGroup>
                                            <ButtonGroup aria-label="Basic example">
                                                <Button style={{width: "120px"}} onClick={(event) => handleInputChange(index, event)}
                                                    name="majorConviction" active={inputField.majorConviction === 'YES'}>YES</Button>
                                                <Button style={{width: "120px"}} onClick={(event) => handleInputChange(index, event)}
                                                    name="majorConviction" active={inputField.majorConviction === 'NO'}>NO</Button>
                                            </ButtonGroup>
                                        </InputGroup>
                                      </Form.Group>

                                      <Form.Group controlId="formBasicEmail">
                                        <Form.Label>MINOR CONVICTION SINCE 2017</Form.Label>
                                        <InputGroup>
                                            <ButtonGroup aria-label="Basic example">
                                                <Button style={{width: "120px"}} onClick={(event) => handleInputChange(index, event)}
                                                    name="minorConviction" active={inputField.minorConviction === 'YES'}>YES</Button>
                                                <Button style={{width: "120px"}} onClick={(event) => handleInputChange(index, event)}
                                                    name="minorConviction" active={inputField.minorConviction === 'NO'}>NO</Button>
                                            </ButtonGroup>
                                        </InputGroup>
                                      </Form.Group>

                                      <Form.Group controlId="formBasicEmail">
                                        <Form.Label>COLLISIONS OR CLAIMS SINCE 2014</Form.Label>
                                        <InputGroup>
                                            <ButtonGroup aria-label="Basic example">
                                                <Button style={{width: "120px"}} onClick={(event) => handleInputChange(index, event)}
                                                    name="collisions" active={inputField.collisions === 'YES'}>YES</Button>
                                                <Button style={{width: "120px"}} onClick={(event) => handleInputChange(index, event)}
                                                    name="collisions" active={inputField.collisions === 'NO'}>NO</Button>
                                            </ButtonGroup>
                                        </InputGroup>
                                      </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                            <div className="pull-right">
                                <Button variant="primary" type="submit" className="goback-btn">
                                    GO BACK
                                </Button>
                                <Button variant="primary" type="submit" className="save-btn" onClick={(event)=> handleSave(event, index)}>
                                    Save & Continue ->
                                </Button>
                            </div>
                        </Fragment>
                        }
                    </div>
                ))}
            </Container>
        </>
	)
}

export default DriverInformation;