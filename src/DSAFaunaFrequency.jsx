import React, { Component } from 'react';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';
import {AreaFrequencies, Frequencies} from "./DSAFaunaData";

export default class DSAFaunaFrequency extends Component {

  renderFrequency(frequency) {
    return frequency > 0 ? "+" + frequency : frequency;
  }

  renderTooltip(area, fauna) {
    const combined_frequency = area.bonus + fauna.bonus;
    const found = Frequencies.find(f => f.bonus === combined_frequency);
    const f = this.renderFrequency(combined_frequency);
    const tt_text = found ? found.name + " (" + f + ")" : f
    return (
      <Tooltip id="tt-dsa-fauna-frequency">
        {tt_text}
      </Tooltip>
    );
  }

  render() {
    const {frequency, area} = this.props;
    // find the area frequency in the static data
    const area_frequency = Frequencies[AreaFrequencies[area]];
    const given_frequency = Frequencies[frequency];
    const combined_frequency = area_frequency.bonus + given_frequency.bonus;
    return (
      <OverlayTrigger placement="bottom" overlay={this.renderTooltip(area_frequency, given_frequency)}>
        <span>{this.renderFrequency(combined_frequency)}</span>
      </OverlayTrigger>
    );
  }
}
