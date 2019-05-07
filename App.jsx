import React, { Component } from 'react';
import { Jumbotron, Grid} from 'react-bootstrap';
import DSAFaunaGrid from './DSAFaunaGrid';
import DSAFaunaFilters from './DSAFaunaFilters';
import DSAHuntingModifiers from './DSAHuntingModifiers';
import DSAShotModifiers from './DSAShotModifiers';
import DSAHuntingTypeWidget from './DSAHuntingTypeWidget';
import DSAHuntingTalentWidget from './DSAHuntingTalentWidget';
import DSARandomFauna from './DSARandomFauna';
import {Fauna, HuntingTypes, HuntingGroundNames, Weather, ShotModifiers} from "./DSAFaunaData";
import './styles/App.css';

export default class App extends Component {

  constructor(props) {
    super(props);

    const defaultHuntingType = HuntingTypes.find(h => h.name === "Pirsch")
    const defaultHuntingGround = HuntingGroundNames[3];
    const defaultWeather = Weather[0];
    const defaultShot = {art: "Keine Erschwernis", fk: 0, tp: 0};
    const defaultSight = ShotModifiers.sight[0];
    this.state = {
      filter: {
        names: [],
        areas: []
      },
      modifiers: {
        huntingground: defaultHuntingGround,
        weather: defaultWeather,
        weapon: defaultShot,
        move: defaultShot,
        size: defaultShot,
        sight: defaultSight
      },
      huntingtype: defaultHuntingType
    };

    this.onFilterChanged = this.onFilterChanged.bind(this)
    this.onModifiersChanged = this.onModifiersChanged.bind(this)
    this.onHuntingTypeChanged = this.onHuntingTypeChanged.bind(this)
  }

  onFilterChanged(filter) {
    this.setState(prevState => {
      var newFilter = prevState.filter;
      for (let k in filter) {
        newFilter[k] = filter[k];
      }
      return {
        filter: newFilter
      };
    });
  }

  onModifiersChanged(modifiers) {
    this.setState(prevState => {
      var newModifiers = prevState.modifiers;
      for (let k in modifiers) {
        newModifiers[k] = modifiers[k];
      }
      return {
        modifiers: newModifiers
      };
    });
  }

  onHuntingTypeChanged(newType) {
    this.setState(
      {
        huntingtype: newType
      }
    )
  }

  getFilteredFauna(fauna, currentFilter) {
    return fauna.filter((f) => {
      // check the filters:
      // 1) Name
      if(currentFilter.names.length > 0) {
        if(!currentFilter.names.includes(f.name))
          return false;
      }

      // 2) Area
      if(currentFilter.areas.length > 0) {
        if(!f.areas.some(a => currentFilter.areas.includes(a.name)))
          return false;
      }

      return true;
    });
  }

  render() {
    const filteredFauna = this.getFilteredFauna(Fauna, this.state.filter)
    return (
      <Grid>
        <Jumbotron>
          <h1>DSA 5 Web Fauna</h1>
        </Jumbotron>
        <DSAHuntingTypeWidget
          onChange={this.onHuntingTypeChanged}
          huntingtype={this.state.huntingtype} />
        <DSAHuntingModifiers
          onChange={this.onModifiersChanged}
          modifiers={this.state.modifiers}
          talent={this.state.huntingtype.tierkunde} />
        <DSAHuntingTalentWidget
          huntingtype={this.state.huntingtype} />
        {this.state.huntingtype.shot ?
        <DSAShotModifiers
          onChange={this.onModifiersChanged}
          modifiers={this.state.modifiers} />
          : "" }
        <DSAFaunaFilters
            fauna={filteredFauna}
            onChange={this.onFilterChanged}
            selection={this.state.filter} />
        <DSARandomFauna
            fauna={filteredFauna}
            selection={this.state.filter} />
        <DSAFaunaGrid
          fauna={filteredFauna}
          modifiers={this.state.modifiers} />
      </Grid>
    );
  }
}
