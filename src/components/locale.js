import React, { Component } from 'react';
import i18n from '../i18n';

function Locale() {	
	const changeLanguage = lang => {
		i18n.changeLanguage(lang)
		window.localStorage.setItem('locale', lang);
	};	
	return(						
	    <div>
		    <button onClick={() => changeLanguage('en')} style={{color: ''}}>EN</button>
	    	<button onClick={() => changeLanguage('fr')} >FR</button>
	    </div>		    
	)	
}

export default Locale;