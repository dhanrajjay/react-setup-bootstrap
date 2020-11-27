import React, { useState, Component, useEffect, useRef } from 'react';
import { Container, Form, Row, Col, InputGroup, Button, FormControl, ButtonGroup } from 'react-bootstrap';
import { TextInput, Select, DateSelection, ButtonGroupList } from 'rv-react-test';
import PolicyTypeSelection from './policyTypeSelection';
import { Translation } from 'react-i18next';
import '../styles/policy.css';
import { subscribe, unsubscribe } from '../utils/pubSub';
import { getLangList } from '../utils/utils';

function PolicyType() {
	const [form, setFormValue] = useState({
		postalcode: 'm2m 2m2',
        insuranceType: 'car',
        noOfVehicles: "1",
        noOfDrivers: 1,
        houseType: 'Homeowner'
	});
	const [textInputModel, setTextInputModel] = useState('');
	const [dropDown, setDropDown] = useState('');
	let childRef = useRef();

	const updateField = ((event, isInnerHTMLElem) => {
	    let val = isInnerHTMLElem ? event.target.innerHTML : event.target.value;
		setFormValue({
			...form,
			[event.target.name]: val
		})
	});

	const handleClick = (event) => {
		window.sessionStorage.setItem('asPolicyType', JSON.stringify(form));
	};

	let dropDownList =  [{value: 1, label: '1'}, {value: 2, label: '2'}, {value: 3, label: '3'}];

	const frenchDropDownList =  [{value: 1, label: '1 Fr'}, {value: 2, label: '2 Fr'}, {value: 3, label: '3 Fr'}];

	useEffect(function() {

     // Calling the api will async
	 const fetchAPI = async (url) => {
         const response = await fetch(url);
         return await response.json();
     };

     const API_KEY_MAP = {
         'people': 'https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people',
         'mohan': 'https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/mohan'
     }

     function fetchAllData(URL) {
        var arr = [];
        for (var i in API_KEY_MAP) {
            arr.push(API_KEY_MAP[i]);
        }
        return Promise.all(arr.map(fetchAPI));
     }

     fetchAllData().then((results) => {
        console.log(results);
     });

     subscribe('language-changed', (data) => {
        const test = getLangList(data.language.toUpperCase(), 'GENDER');
        console.log('Promise', test);
        if (test instanceof Promise) {
            test.then((data) => {
                dropDownList = data.results;
                childRef.current.dynamicSelectCb(data.results);
            })
        } else {
            dropDownList = test;
            childRef.current.dynamicSelectCb(test);
        }
     })
     return function cleanup() {
        unsubscribe('language-changed');
     };
    }, []);

	const handleChange = (event, isInnerValue, isError) => {

    }

    const dynamicSelectCb = (data) => { return data };
	
	return (
		<Translation>
            {
                t =>
                    <Container>
                        <Row className="justify-content-md-center screen-padding">
                            <Col md={6} className="screen-card">
                                <Form>
                                    <Select label="Select Dropdown" name="dropDown" value={dropDown}
                                    onChange={handleChange} list={dropDownList} ref={childRef}/>
                                    <div>
                                        <img className="stepimg" alt={t('getStarted.stepalttext')} />
                                        <label name="getstarted">{t('getStarted.getstarted')}</label>
                                    </div>
                                    <TextInput type='text' label={t('getStarted.postalcode')} name="postalcode" value={form.postalcode}
                                        placeholder="Enter postal code" arialabelledby="Postal Code" disabled="true" onChange={updateField} />

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>{t('getStarted.selectone')}</Form.Label>
                                        <InputGroup>
                                            <ButtonGroup aria-label="Basic example">
                                                <Button style={{width: "120px", height: "60px"}} onClick={updateField} name="insuranceType" value="car" active={form.insuranceType === 'car'}>
                                                    <img alt={t('getStarted.autoimgtext')} /><br/>
                                                    {t('getStarted.autoimgtext')}
                                                </Button>
                                                <Button style={{width: "120px", height: "60px"}} onClick={updateField} name="insuranceType" value="home" active={form.insuranceType === 'home'}>
                                                  <img alt={t('getStarted.homeimgtext')} /><br/>
                                                  {t('getStarted.homeimgtext')}
                                                </Button>
                                                <Button style={{width: "160px", height: "60px"}} onClick={updateField} name="insuranceType" value="both" active={form.insuranceType === 'both'}>Combined for more savings</Button>
                                            </ButtonGroup>
                                        </InputGroup>
                                    </Form.Group>

                                    <PolicyTypeSelection updateFieldValue={updateField} form={form} />

                                    <Button onClick={handleClick}>{t('common.savecontinue')} </Button>
                                </Form>
                            </Col>
                            <Col md={6} className="d-none d-md-block screen-padding-right">
                                <label name="simplesteps" className="simpletext">{t('getStarted.simplesteps')}</label>
                                <label name="welcometext" className="welcometext">{t('getStarted.welcometext')} </label>
                                <p name="quoteestimate" className="provideyoutext">{t('getStarted.quoteestimate')}</p>
                                <p name="quotepremiun" className="provideyoutext">{t('getStarted.quotepremiun')}</p>
                                <img className="savemoneyimg" alt={t('getStarted.savemoneyimgalttext')} />
                            </Col>
                        </Row>
                    </Container>
            }
        </Translation>
	)
}

export default PolicyType;