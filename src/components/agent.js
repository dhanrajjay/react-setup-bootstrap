import React, { useState, Component } from 'react';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';
import { Translation } from 'react-i18next';
import SelectComp from './select';

export default function Agent() {	
	const [ agentLabel, setAgentLabel ] = useState('agent');
	const [ checked, setChecked ] = useState(false);
	const [ agentList, setAgentList ] = useState({
		checkedAgent: true,
		checkedAgency: false,
		checkedAgencies: false
	})
	const [currency, setCurrency] = useState('EUR');
	const handleCurrencyChange = event => {
	setCurrency(event.target.value);
	};
	const setAgent = (event) => {
		setAgentLabel(event.target.value);
	} 
	const handleChange = (event) => {
		setChecked(event.target.checked);
	}
	const handleAgencyList = (name) => (event) => {
		setAgentList({...agentList, [name]: event.target.checked });
	}
	const currencies = [
	  {
	    value: 'USD',
	    label: '$',
	  },
	  {
	    value: 'EUR',
	    label: '€',
	  },
	  {
	    value: 'BTC',
	    label: '฿',
	  },
	  {
	    value: 'JPY',
	    label: '¥',
	  },
	];
	const currencyOptions = [];
	for (let i = 0; i <= currencies.length; i++) {
	  if (currencies && currencies[i]) {	  	
	  	currencyOptions.push(<option value={currencies[i].value} key={currencies[i].label}>{currencies[i].value}</option>);
	  }	  
	};	
	return(
		<Translation>
			{
                t =>
				<Form noValidate className="global-padding">
			      <Form.Row>
			        <Form.Group as={Col} md="4" controlId="validationCustom01">
			          	<Form.Label>{t('header')}</Form.Label>
			          	<div>
				          <Form.Check inline label="Agent" type="radio" id="agent" />
	      				  <Form.Check inline label="Agency" type="radio" id="agency" />
	      				</div>
			        </Form.Group>
			        <Form.Group as={Col} md="1"></Form.Group>
			        <Form.Group as={Col} md="4" controlId="validationCustom02">
			          <Form.Label>Lable Name</Form.Label>
			          <div>
				          <Form.Check inline label="Agents" id="agentCheck" />
	      				  <Form.Check inline label="Agency Manager" id="agencyCheck" />
	      				  <Form.Check inline label="Agency Assistant" id="agencyAssistantCheck" />	      				  
	      				</div>
			        </Form.Group>        
			      </Form.Row>
			      <Form.Row>
			        <Form.Group as={Col} md="4" controlId="validationCustom03">
			          <Form.Label>AGENT NAME OR NUMBER</Form.Label>
			          <Form.Control type="text" placeholder="City" required />
			          <Form.Control.Feedback type="invalid">
			            Please provide a valid city.
			          </Form.Control.Feedback>
			        </Form.Group>
			        <Form.Group as={Col} md="1" controlId="validationCustom04">			          
			        </Form.Group>
			        <Form.Group as={Col} md="3" controlId="validationCustom05">
			          <SelectComp />
			        </Form.Group>
			      </Form.Row>
			      <Form.Row>
				      <Form.Group as={Col} md="4">			      	
						<Form.Label>DROP DOWN MENU</Form.Label>			      	
				        <select className="browser-default custom-select" value={currency} onChange={handleCurrencyChange}>
			              {currencyOptions}
			            </select>	

			            <Form.Group>			      	
							<Form.Label>DROP DOWN MENU</Form.Label>			      	
					        <select className="browser-default custom-select" value={currency} onChange={handleCurrencyChange}>
				              {currencyOptions}
				            </select>			        
					      </Form.Group>		        
				      </Form.Group>
				      <Form.Group as={Col} md="1"></Form.Group>
				      <Form.Group as={Col} md="4">
				      	<Form.Label>TEXT AREA</Form.Label>			      	
				        <Form.Control as="textarea" rows="4" />
				      </Form.Group>
				   </Form.Row>   
			      <Button type="submit">SEARCH</Button>
			    </Form>
			}    
		</Translation>    
	)
}