import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import {Talent, Time} from "./DSAUtils"
import DSATextProperty from "./DSATextProperty"

export default class DSAHuntingTalentWidget extends Component {

  render() {
    const {jagdtalent, grundzeitraum, name} = this.props.huntingtype
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title>Jagdtalent: {Talent(jagdtalent)}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <DSATextProperty title="Rationen" text="2 Rationen pro QS auf das Jagdtalent" />
          {
            name === "Angeln" ?
            <DSATextProperty title="Angeln" text="Es sind maximal 4 Rationen beim Angeln möglich" />
            : ""
          }
          <DSATextProperty title="Grundzeitraum" text={Time(grundzeitraum)} />
        </Panel.Body>
      </Panel>
    );
  }
}
