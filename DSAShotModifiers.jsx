import React from 'react';

import { DSAGridItem } from '../controls/DSAGrid';
import DSASelect from '../controls/DSASelect';
import {DSAGrid} from '../controls/DSAGrid';

import {Modifier} from "../utils/DSATextElements";

import {ShotModifiers} from "../data/DSAFaunaData";

function ShotModifier(props) {
  const {title, options, property, selected, multiple, onChange} = props;

  const onModifiersChange = (val) => {
    if(multiple) {
     selected[property] = options.filter(o => val.some(v => v.value === o.art));
    }
    else {
      selected[property] = options.find( o => o.art === val.value);
    }
    onChange(selected);
  }

  const menuItems = options.map((o, i) => {
    return { value: o.art, label: o.art}
  });

  let fk;
  let tp;
  let art;
  let anmerkung;
  if(multiple) {
    fk = selected[property].reduce((sum, p) => sum += p.fk, 0);
    tp = selected[property].reduce((sum, p) => sum += p.tp, 0);
    art = selected[property].reduce((sum, p) => {sum.push(p.art + ""); return sum}, []);
  }
  else {
    fk = selected[property].fk;
    tp = selected[property].tp;
    art = selected[property].art;
    anmerkung = selected[property].anmerkung;
  }

  let helperText = "FK: " + Modifier(fk) + " / TP " + Modifier(tp);
  if(anmerkung)
    helperText += " - Anmerkung: " + anmerkung;

  return (
    <DSAGridItem xs={12} sm={12} md={6} lg={3}>
      <DSASelect
        options={menuItems}
        label={title}
        value={art}
        multi={multiple}
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
          multiple={true}
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
