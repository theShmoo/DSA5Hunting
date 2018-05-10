import React, { Component } from 'react';
import { DropdownButton, MenuItem, ListGroupItem} from 'react-bootstrap';
import {HuntingTypes} from "./DSAFaunaData";

export default class DSAHuntingTypeWidget extends Component {

  renderHuntingTypeChooser() {
    const {onChange, huntingtype} = this.props;
    const menuItems = HuntingTypes.map((h, i) => {
      const active = h.name === huntingtype.name
      return (
          <MenuItem
            key={i}
            eventKey={i}
            active={active}>
            {h.name}
          </MenuItem>
        );
    });
    return (
      <DropdownButton
        title={huntingtype.name}
        id="dd-dsa-hunting-type"
        onSelect={e => onChange(HuntingTypes[e])}
      >
        {menuItems}
      </DropdownButton>
    );
  }

  render() {
    return (
      <ListGroupItem>
        <strong>Wähle die Art der Jagd:</strong> {this.renderHuntingTypeChooser()}
      </ListGroupItem>
    );
  }
}
