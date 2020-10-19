import React, { Component } from 'react';
import { Container, Form, Row, Col, InputGroup, Button, FormControl, ButtonGroup } from 'react-bootstrap';
import  ButtonGroupList from 'rv-react-test/ButtonGroupList';
import { Translation } from 'react-i18next';
import i18n from "../i18n";

function PolicyTypeSelection(props) {

	const vehicleButtonGroupMap = [1,2,3,4].map((num, index) => {		
		return <Button key={index} className="btn-bar-primary"
		 onClick={props.updateFieldValue} name="noOfVehicles" value={num} active={props.form.noOfVehicles === num}>{num}</Button>
	});
	const driverButtonGroupMap = [1,2,3,4].map((num, index) => {		
		return <Button key={index} className="btn-bar-primary"
		onClick={props.updateFieldValue} name="noOfDrivers" value={num} active={props.form.noOfDrivers === num}>{num}</Button>		 
	});

	const homeTypeGroupMap = ['Homeowner','Condo','Tenant'].map((type, index) => {
		return <Button key={index} className="btn-bar-primary" style={{width: "135px"}}
		onClick={props.updateFieldValue} name="houseType" value={type} active={props.form.houseType === type}>{type}</Button>		 
	});

	const vehicleList = [{label: i18n.t('policyType.one'), value: "1"},{label: i18n.t('policyType.two'), value: "2"}];

	return (
		<>
			{
                (props.form.insuranceType === 'car' || props.form.insuranceType === 'both') &&
                <div>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>NUMBER OF VEHICLES</Form.Label>
                    <InputGroup>
                        <ButtonGroupList onChange={props.updateFieldValue} value={props.form.noOfVehicles} name="noOfVehicles" list={vehicleList} />
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>NUMBER OF DRIVERS</Form.Label>
                    <InputGroup>
                        <ButtonGroup aria-label="Basic example">
                          {driverButtonGroupMap}
                        </ButtonGroup>
                    </InputGroup>
                </Form.Group>
                </div>
			}

			{
                (props.form.insuranceType === 'home') &&
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>HOME TYPE</Form.Label>
                    <InputGroup>
                        <ButtonGroup aria-label="Basic example">
                            {homeTypeGroupMap}
                        </ButtonGroup>
                    </InputGroup>
                </Form.Group>
			}
			
		</>
	)
}

export default PolicyTypeSelection;