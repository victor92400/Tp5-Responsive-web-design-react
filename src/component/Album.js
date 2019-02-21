import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';

export default class Album extends Component {
  render() {
    return (
      <Col xs="6" sm="4" lg="3" xl="2">
        <article>
          <figure>
            <img src={this.props.image} alt="album" />
            <figcaption>{this.props.nom}</figcaption>
          </figure>
          <div class="artist">{this.props.artist}</div>
          <div class="count">{this.props.song} songs</div>
        </article>
      </Col>
    );
  }
}
