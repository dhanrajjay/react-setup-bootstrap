import React from "react";
import { Translation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import Locale from './locale';
import NavBar from './nav';
import i18n from '../i18n';
import logo from '../assets/logo.png';
import '../styles/header.css';

// Redux
import { connect } from 'react-redux';
import store from '../store/index';
import { getLanguage } from '../store/actions/root-actions';

function Header(props) {
  console.log('Header compoennt', props);
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

const MapStateToProps = (state) => {
    return state.rootState;
};

export default connect(MapStateToProps)(Header);