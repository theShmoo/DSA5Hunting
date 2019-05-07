import React, { Component } from 'react';
import {Panel, ListGroup} from 'react-bootstrap';
import DSAAreaProperty from './DSAAreaProperty'

export default class DSAFauna extends Component {

  render() {
    const {name, areas} = this.props.fauna;
    return (
      <Panel eventKey={name}>
        <Panel.Heading>
          <Panel.Title toggle>
            {name}
          </Panel.Title>
        </Panel.Heading>
        <Panel.Collapse>
          <ListGroup>
            <DSAAreaProperty title="Gebiete" areas={areas} />
          </ListGroup>
        </Panel.Collapse>
      </Panel>
    );
  }
}
