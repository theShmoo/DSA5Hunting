import React, { Component } from 'react';
import {Col, Row, PageHeader} from 'react-bootstrap';
import DSAFauna from './DSAFauna.jsx';

export default class DSAFaunaGrid extends Component {
  render()
  {
    const fauna = this.props.fauna.map((f, i) => {
      return (
        <Col sx={6} sm={6} md={4} lg={3} key={i}>
          <DSAFauna fauna={f} />
        </Col>);
    })
    return (
      <div>
        <Row>
          <PageHeader>Tiere</PageHeader>
        </Row>
        {fauna}
      </div>
    );
  }
}
