import React, { Component } from 'react';

import { DSAGrid, DSAGridItem} from '../controls/DSAGrid';
import DSAInfoBox from '../controls/DSAInfoBox';
import DSASelect from '../controls/DSASelect';

export default class DSAFaunaFilters extends Component {

  getAreas(fauna, filter) {
    // get all area arrays this is an array of arrrays
    const areasAsArray = fauna.map((f) => {
        return f.areas.map(a => a.name);
    });

    // flattern the array (it is an array of arrays)
    return [].concat(...areasAsArray)
    // only use unique values
    .filter((val, id, array) => {
       return array.indexOf(val) === id;
    })
    // sort it (by alph)
    .sort();
  }

  handleFilter = (values, property) => {
    let filter = {};
    filter[property] = values.map( x => x.value);
    this.props.onChange(filter);
  }

  render() {
    const {fauna, selection} = this.props;
    const names = fauna.map(f => {return {label: f.name, value: f.name}});
    const areas = this.getAreas(fauna).map(a => {return {label: a, value: a}});
    return (
      <DSAInfoBox title="Filter">
        <DSAGrid>
          <DSAGridItem xs={12} sm={12} md={6} lg={6}>
            <DSASelect
              multi={true}
              options={names}
              value={selection.names}
              label="Tier"
              helperText="Suche nach einer oder mehreren speziellen Tierarten (z.B.: Wolfsratte)."
              onChange={(v) => this.handleFilter(v, "names")} />
          </DSAGridItem>
          <DSAGridItem xs={12} sm={12} md={6} lg={6}>
            <DSASelect
              multi={true}
              options={areas}
              label="Gebiet"
              value={selection.areas}
              helperText="Suche nach einer oder mehreren speziellen Regionen (z.B.: Regenwald)."
              onChange={(v) => this.handleFilter(v, "areas")} />
        </DSAGridItem>
        </DSAGrid>
      </DSAInfoBox>
    );
  }
}
