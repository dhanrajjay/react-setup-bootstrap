import React from "react";
import { Translation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import Locale from './locale';
import NavBar from './nav';
import i18n from '../i18n';
import logo from '../assets/logo.png';
import '../styles/header.css';

export default function Header() {
  return (
    <div className="header">
      <Row>
        <Col>
            <div className="logo">
              <img src={logo} alt="Company Logo" />
            </div>
        </Col>
        <Col>
          <div className="pull-right-container">
            <Translation>
              {
                t =>
                <>
                  <div className="agency">
                    <span>{t('agency')}</span>
                  </div>

                  <div className="contact">
                    <span>1-800-255-5225</span>
                  </div>
                </>
              }
            </Translation>
            <Locale />
          </div>
        </Col>
      </Row>
      <NavBar />
    </div>
  );
}