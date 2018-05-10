import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import DSAShotModifier from "./DSAShotModifier";
import {ShotModifiers} from "./DSAFaunaData";

export default class DSAShotModifiers extends Component {

  render() {
    const {onChange, modifiers} = this.props;

    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title>Schuss</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <DSAShotModifier title="Waffe"
                      onChange={onChange}
                      property="weapon"
                      selected={modifiers}
                      options={ShotModifiers.weapon}/>
          <DSAShotModifier title="Bewegung"
                      onChange={onChange}
                      property="move"
                      selected={modifiers}
                      options={ShotModifiers.move}/>
          <DSAShotModifier title="Größe"
                      onChange={onChange}
                      property="size"
                      selected={modifiers}
                      options={ShotModifiers.size}/>
          <DSAShotModifier title="Sicht"
                      onChange={onChange}
                      property="sight"
                      selected={modifiers}
                      options={ShotModifiers.sight}/>
        </Panel.Body>
      </Panel>
    );
  }
}
