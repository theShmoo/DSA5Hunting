import React, { Component } from 'react';
import { DropdownButton, MenuItem, ListGroupItem } from 'react-bootstrap';

export default class DSAHuntingModifier extends Component {

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
      const active = o.name === selected[property].name
      return (
          <MenuItem
            key={i}
            eventKey={i}
            active={active}>
            {o.name}
          </MenuItem>
        );
    });
    return (
      <span>
      <DropdownButton
        title={selected[property].name}
        id="dd-dsa-hunting-type"
        onSelect={e => this.onModifiersChange(options[e])}
      >
        {menuItems}
      </DropdownButton>
      <span> Erschwernis: {selected[property].bonus}</span>
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

