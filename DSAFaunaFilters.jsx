import React, { Component } from 'react';
import { Row, Col, PageHeader} from 'react-bootstrap';
import FilterWidget from './FilterWidget';

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

  render() {
    const {fauna, onChange, selection} = this.props;
    const names = fauna.map(f => f.name);
    const areas = this.getAreas(fauna);
    return (
      <div>
        <Row>
          <PageHeader>Filter</PageHeader>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={6}>
            <FilterWidget options={names}
                title="Tier"
                selected={selection.names}
                property="names"
                onUserInput={onChange} >
                Suche nach einer oder mehreren speziellen Tierarten (z.B.: Wolfsratte). <br/>
                Die angezeigten Auswahlmöglichkeiten hängen von den anderen Filtern ab.
              </FilterWidget>
          </Col>
          <Col xs={12} sm={6} md={6}>
            <FilterWidget options={areas}
              title="Gebiet"
              selected={selection.areas}
              property="areas"
              onUserInput={onChange}>
              Suche nach einer oder mehreren speziellen Regionen (z.B.: Regenwald). <br/>
              Die angezeigten Auswahlmöglichkeiten hängen von den anderen Filtern ab.
            </FilterWidget>
          </Col>
        </Row>
      </div>
    );
  }
}
