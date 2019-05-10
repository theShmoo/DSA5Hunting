import React from 'react';

import { DSAGridItem } from '../controls/DSAGrid';
import DSASelect from '../controls/DSASelect';
import {DSAGrid} from '../controls/DSAGrid';

import {Modifier} from "../utils/DSATextElements";

import {ShotModifiers} from "../data/DSAFaunaData";

function ShotModifier(props) {
  const {title, options, property, selected} = props;

  const onModifiersChange = (val) => {
    const {selected, property, options, onChange} = props;
    selected[property] = options.find( o => o.art === val.value);
    onChange(selected);
  }

  const menuItems = options.map((o, i) => {
    return { value: o.art, label: o.art}
  });
  const {art, fk, tp, anmerkung} = selected[property];
  let helperText = "FK: " + Modifier(fk) + " / TP " + Modifier(tp);
  if(anmerkung)
    helperText += " - Anmerkung: " + anmerkung;
  return (
    <DSAGridItem xs={12} sm={12} md={6} lg={4}>
      <DSASelect
        options={menuItems}
        label={title}
        value={art}
        helperText={helperText}
        onChange={(e) => onModifiersChange(e)} />
    </DSAGridItem>
  );
}

function DSAShotModifiers(props) {
  const {onChange, modifiers} = props;

  return (<DSAGrid>
        <ShotModifier title="Waffe"
                    onChange={onChange}
                    property="weapon"
                    selected={modifiers}
                    options={ShotModifiers.weapon}/>
        <ShotModifier title="Bewegung"
                    onChange={onChange}
                    property="move"
                    selected={modifiers}
                    options={ShotModifiers.move}/>
        <ShotModifier title="Größe"
                    onChange={onChange}
                    property="size"
                    selected={modifiers}
                    options={ShotModifiers.size}/>
        <ShotModifier title="Sicht"
                    onChange={onChange}
                    property="sight"
                    selected={modifiers}
                    options={ShotModifiers.sight}/>
  </DSAGrid>);
}

export default DSAShotModifiers;
