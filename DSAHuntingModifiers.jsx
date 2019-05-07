import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import DSAHuntingModifier from "./DSAHuntingModifier";
import DSAQSTable from "./DSAQSTable";
import {HuntingGroundNames, Weather, QSTierkunde} from "./DSAFaunaData";
import {Talent} from "./DSAUtils"

export default class DSAHuntingModifiers extends Component {

  render() {
    const {onChange, modifiers, talent} = this.props;

    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title>{Talent(talent)}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <DSAHuntingModifier title="Jagdgebiet"
            onChange={onChange}
            property="huntingground"
            selected={modifiers}
            options={HuntingGroundNames}/>
          <DSAHuntingModifier title="Wetter"
            onChange={onChange}
            property="weather"
            selected={modifiers}
            options={Weather}/>
          <DSAQSTable info={QSTierkunde} />
        </Panel.Body>
      </Panel>
    );
  }
}
