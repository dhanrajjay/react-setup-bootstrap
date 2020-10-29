import React, { useState, Component } from 'react';
import  { ButtonGroup, Button } from 'react-bootstrap';
import i18n from '../i18n';
import { publish } from '../utils/pubSub';

// Redux
import store from '../store/index';
import { updateLanguage } from '../store/actions/root-actions';

function Locale() {	
	const [language, setLanguage] = useState('en');
	const changeLanguage = lang => {
		i18n.changeLanguage(lang)
		window.localStorage.setItem('locale', lang);
	};	
	const onStateChange = lang => {
		setLanguage(lang);
		publish('language-changed', {language: lang});
		store.dispatch(updateLanguage(lang));
	};

	const updateLang = lang => {
		changeLanguage(lang);
		onStateChange(lang);
	}
	return(						
	    <ButtonGroup>
		    <Button active={language === 'en'} onClick={() => updateLang('en')} style={{color: ''}}>EN</Button>
			<Button active={language === 'fr'} onClick={() => updateLang('fr')} >FR</Button>
	    </ButtonGroup>
	)	
}


export default Locale;