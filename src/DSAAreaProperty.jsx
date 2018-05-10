import React, { Component } from 'react';
import {ListGroupItem} from 'react-bootstrap';
import DSAFaunaFrequency from './DSAFaunaFrequency'

export default class DSAAreaProperty extends Component {
  render()
  {
    const {title, areas} = this.props;
    const items = areas.map((g, i) => {
        return <li key={i}>
            <span>{g.name}: </span>
            <DSAFaunaFrequency area={g.name} frequency={g.frequency} />
          </li>
      });
    return (
      <ListGroupItem>
        <strong>{title}</strong>
          <ul>
            {items}
          </ul>
      </ListGroupItem>
    );
  }
}
