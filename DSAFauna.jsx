import React from 'react';

import {Frequencies, AreaFrequencies} from "../data/DSAFaunaData";

import DSAItemList from '../controls/DSAItemList';

import {Modifier} from '../utils/DSATextElements';

class DSAFauna extends React.Component {

  getFrequency(area, frequency) {
    // find the area frequency in the static data
    const area_frequency = Frequencies[AreaFrequencies[area]];
    const given_frequency = Frequencies[frequency];
    const combined_frequency = area_frequency.bonus + given_frequency.bonus;

    const found = Frequencies.find(f => f.bonus === combined_frequency);
    const f = Modifier(combined_frequency);
    const tt = found ? found.name + " (" + f + ")" : f;
    return {
        name: area,
        value: f,
        tooltip: tt,
    };
  }

  getAreaItems(fauna) {
    const {name, areas} = fauna;
    const items = areas.map((g) => this.getFrequency(g.name, g.frequency));
    return [{
        title: name,
        items: items
      }];
  }

  render() {
    const {fauna} = this.props;
    return <DSAItemList collapse={true} items={this.getAreaItems(fauna)} />
  }
}

export default DSAFauna;
