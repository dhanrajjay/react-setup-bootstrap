import React from "react";
import { Translation } from 'react-i18next';
import Locale from './locale';
import NavBar from './nav';
import i18n from '../i18n';

export default function Header() {
  return (
    <div style={{background: 'blue', color: 'white'}}>
      <section>
        <section>
            <img src={"../logo.svg"} alt="Company Logo" />
            <Translation>
              {
                t =>
                <>
                  <div className="app">
                    <span>{t('agency')}</span>
                  </div>

                  <div className="app">
                    <span>1-800-255-5225</span>
                  </div>  
                </>
              }
            </Translation>
            <Locale />
        </section>
        <NavBar />
      </section>
    </div>
  );
}