import React, { Component } from 'react';
import { Translation } from 'react-i18next';
import Locale from './locale';
import NavBar from './nav';
import i18n from '../i18n';

class Footer extends Component {
	render() {
		return (			
			<div>		
				<Translation>
					{
						t =>
							<div className="footer">
								<ul>
									<li>{t('footer.newroom')}</li>
									<li>{t('footer.carrers')}</li>
									<li>{t('footer.contact')}</li>
									<li>{t('footer.blog')}</li>
								</ul>
								<ul>
									<li>{t('footer.sitemap')}</li>
									<li>{t('footer.termsofuse')}</li>
									<li>{t('footer.privacy')}</li>
									<li>{t('footer.allstate')}</li>
								</ul>
								<p>{t('footer.copyright')}</p>
							</div>
					}
				</Translation>				
			</div>							
		)
	}
}

export default Footer;