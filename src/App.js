import React, { Component } from 'react';
import Header from './container/Header';
import SideMenu from './container/SideMenu';
import Artist from './component/Artist';
import AlbumGrid from './container/AlbumGrid';
import { Container, Col, Row } from 'reactstrap';

import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Row>
          <Col xs="2" className="d-none d-lg-block">
            <SideMenu />
          </Col>
          <Col>
            <main>
              <Artist />
              <AlbumGrid />
            </main>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
