import React from 'react';

import DSAItemList from '../controls/DSAItemList';
import {Time, Talent} from "../utils/DSATextElements";

function DSAHuntingTalent(props) {
  const {name, time, talent} = props;
  let items = [
    {name: "Talent", value: Talent(talent)},
    {name: "Rationen", value: "2 Rationen pro QS auf das Jagdtalent"},
  ];
  if(name === "Angeln") {
    items.push({name: "Angeln",
      value: "Es sind maximal 4 Rationen beim Angeln möglich"
    });
  }
  items.push({name: "Grundzeitraum", value: Time(time)});

  return <DSAItemList items={[{ title: name, items: items}]} />
}

export default DSAHuntingTalent;
