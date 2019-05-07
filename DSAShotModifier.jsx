import React, { Component } from 'react';
import { DropdownButton, MenuItem, ListGroupItem } from 'react-bootstrap';

export default class DSAShotModifier extends Component {

  constructor(props)
  {
    super(props);

    this.onModifiersChange = this.onModifiersChange.bind(this);
  }

   onModifiersChange(val) {
    const {selected, property} = this.props;
    selected[property] = val;
    this.props.onChange(selected);
  }

  renderModifierChooser() {
    const {selected, options, property} = this.props;
    const menuItems = options.map((o, i) => {
      const active = o.art === selected[property].art
      return (
          <MenuItem
            key={i}
            eventKey={i}
            active={active}>
            {o.art}
          </MenuItem>
        );
    });
    const {fk, tp, art, anmerkung} = selected[property];
    return (
      <span>
      <DropdownButton
        title={art}
        id="dd-dsa-shot-type"
        onSelect={e => this.onModifiersChange(options[e])}
      >
        {menuItems}
      </DropdownButton>
      <span> FK: {fk} / TP {tp}
      {anmerkung ? " - Anmerkung: " + anmerkung : ""}
      </span>
      </span>
    );
  }

  render() {
    const {title} = this.props;
    return (
      <ListGroupItem>
        <strong>{title}:</strong> {this.renderModifierChooser()}
      </ListGroupItem>
    );
  }
}

