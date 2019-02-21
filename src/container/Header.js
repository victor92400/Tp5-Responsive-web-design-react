import React, { Component } from 'react';
import logo from '../img/logo.png';
import { Dropdown, DropdownToggle, DropdownMenu, Container, Col, Row } from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <header>
        <div class="wrapper">
          <Row>
            <Col xs="2">
              <div class="logo-search">
                <img class="pull-left" src={logo} alt="logo" />
              </div>
            </Col>

            <Col xs="5" md="7">
              <form method="POST" action="index.html" className="d-none d-sm-block">
                <input type="search" required class="search" />
                <input
                  type="submit"
                  name="submit"
                  value="Rechercher"
                  class="submit"
                />
              </form>
            </Col>
            <Col xs="5" md="3" >
              <div class="user">
                <Dropdown>
                  <DropdownToggle caret>
                  <a href="#">Luke Chesser</a>
                    <DropdownMenu />
                  </DropdownToggle>
                </Dropdown>
              </div>
            </Col>
          </Row>
        </div>
      </header>
    );
  }
}

export default Header;
