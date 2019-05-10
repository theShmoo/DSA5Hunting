import React from 'react';

import { DSAGridItem } from '../controls/DSAGrid';
import DSASelect from '../controls/DSASelect';

import {HuntingGroundNames, Weather} from "../data/DSAFaunaData";

import {Modifier} from "../utils/DSATextElements";

function HuntingModifier(props) {
  const {title, options, property, selected} = props;

   const onModifiersChange = (val) => {
    const {selected, property, options, onChange} = props;
    selected[property] = options.find( o => o.name === val.value);
    onChange(selected);
  }

  const menuItems = options.map((o, i) => {
    return { value: o.name, label: o.name}
  });
  const value = selected[property].name;

  return (
    <DSAGridItem xs={12} sm={12} md={6} lg={4}>
      <DSASelect
        options={menuItems}
        label={title}
        value={value}
        helperText={"Erschwernis: " + Modifier(selected[property].bonus)}
        onChange={(e) => onModifiersChange(e)} />
    </DSAGridItem>
  );
}

function DSAHuntingModifiers(props) {
  const {onChange, modifiers} = props;
  return (<>
    <HuntingModifier title="Jagdgebiet"
      onChange={onChange}
      property="huntingground"
      selected={modifiers}
      options={HuntingGroundNames}/>
    <HuntingModifier title="Wetter"
      onChange={onChange}
      property="weather"
      selected={modifiers}
      options={Weather}/>
  </>
  );
}

export default DSAHuntingModifiers;
