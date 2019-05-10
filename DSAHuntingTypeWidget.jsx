import React from 'react';

import { DSAGridItem} from '../controls/DSAGrid';
import DSASelect from '../controls/DSASelect';

import {Talent} from "../utils/DSATextElements";

import {HuntingTypes} from "../data/DSAFaunaData";

function DSAHuntingTypeWidget(props) {

  const options = HuntingTypes.map((h, i) => {return {
    value: h.name,
    label: h.name,
  }});

  const handleChange = (e, types) => {
    const newType = types.find(t => t.name === e.value);
    props.onChange(newType);
  }

  const {name, jagdtalent} = props.huntingtype;
  return (
    <DSAGridItem xs={12} sm={12} md={6} lg={4}>
      <DSASelect
        options={options}
        value={name}
        label={Talent(jagdtalent)}
        helperText={"Wähle die Art der Jagd"}
        onChange={(e) => handleChange(e, HuntingTypes)} />
    </DSAGridItem>
  );
}

export default DSAHuntingTypeWidget;
