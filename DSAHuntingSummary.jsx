import React from 'react';

import DSAHuntingTalent from './DSAHuntingTalent';

import DSAQSTable from "../controls/DSAQSTable";
import DSAItemList from "../controls/DSAItemList";
import DSAMediaCard from '../controls/DSAMediaCard';
import {DSAGridItem, DSAGrid} from '../controls/DSAGrid';

import {Modifier, Talent} from "../utils/DSATextElements";

import {QSTierkunde} from "../data/DSAFaunaData";

function printModifier(modifier) {
   return modifier.name + ": " + Modifier(modifier.bonus);
}

function TypeModifiers(props) {
  const {huntingground, weather} = props;
  const items = [
    {name: "Jagdgebiet", value: printModifier(huntingground)},
    {name: "Wetter", value: printModifier(weather)},
  ];
  const sum = "Erschwernis: " + Modifier(huntingground.bonus + weather.bonus);
  return <DSAItemList items={[{ title: sum, items: items}]} />
}

function printShotModifier(modifier) {
  let {art, fk, tp, anmerkung} = modifier;

  let text = art + ": FK: " + Modifier(fk) + " / TP " + Modifier(tp);
  if(anmerkung)
    text += " - Anmerkung: " + anmerkung;
  return text;
}

function ShotModifiers(props) {
  const {weapon, move, size, sight} = props;
  const items = [
    {name: "Waffe", value: printShotModifier(weapon)},
    {name: "Bewegung", value: printShotModifier(move)},
    {name: "Größe", value: printShotModifier(size)},
    {name: "Sicht", value: printShotModifier(sight)},
  ];
  const sum = {
    art: "Erschwernis",
    fk: weapon.fk + move.fk + size.fk + sight.fk,
    tp: weapon.fk + move.fk + size.fk + sight.fk,
  };
  return <DSAItemList items={[{ title: printShotModifier(sum), items: items}]} />
}

function DSAHuntingSummary(props) {
  const {modifiers, type} = props;
  const {name, grundzeitraum, jagdtalent, tierkunde, shot} = type;
  const {huntingground, weather, weapon, move, size, sight} = modifiers;
  const lg = shot ? 3 : 4;

  return <DSAGrid>
    <DSAGridItem xs={12} sm={6} md={4} lg={lg}>
      <DSAMediaCard
        imagesrc="img/tierkunde.jpg"
        imagetitle="Jagd"
        content={"Nun folgt eine Probe auf " + Talent(tierkunde) + ", modifiziert um die Gegend."}
        title="Tierkundeprobe">
        <TypeModifiers huntingground={huntingground} weather={weather} />
      </DSAMediaCard>
    </DSAGridItem>
    <DSAGridItem xs={12} sm={6} md={4} lg={lg}>
      <DSAMediaCard
        imagesrc="img/wald.jpg"
        imagetitle="Qualitätsstufen"
        content="Gelingt dem Helden die Probe, dann können die QS folgende zwei Optionen bewirken: Senken des Grundzeitraums, Erleichterung der folgenden Probe auf das Jagdtalent. Die Vorteile ergänzen sich, sind aber in der gleichen Kategorie nicht kumulativ"
        title="QS der Tierkundenprobe">
        <DSAQSTable info={QSTierkunde} />
      </DSAMediaCard>
    </DSAGridItem>
    <DSAGridItem xs={12} sm={6} md={4} lg={lg}>
      <DSAMediaCard
        imagesrc="img/jagd.jpg"
        imagetitle="Jagd"
        content="Für jede QS bei der Probe hat der Held ein (oder mehrere) Tiere vor sich, welches ihm 2 Rationen an Fleisch zur Verfügung stellen kann."
        title="Jagdtalentprobe">
        <DSAHuntingTalent name={name} time={grundzeitraum} talent={jagdtalent}/>
      </DSAMediaCard>
    </DSAGridItem>
    {shot ?
    <DSAGridItem xs={12} sm={6} md={4} lg={lg}>
      <DSAMediaCard
        imagesrc="img/fernkampf-angriff-erfolg.jpg"
        imagetitle="Schuss"
        content="Zu guter Letzt folgt der Schuss. Trifft der Jäger, hat er das Tier erlegt."
        title="Schuss">
        <ShotModifiers weapon={weapon} move={move} size={size} sight={sight} />
      </DSAMediaCard>
    </DSAGridItem>
    : ""}
  </DSAGrid>;
}

export default DSAHuntingSummary;
