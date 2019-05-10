import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { DSAGrid, DSAGridRow } from '../controls/DSAGrid';
import DSAInfoBox from '../controls/DSAInfoBox';

import DSAFaunaGrid from './DSAFaunaGrid';
import DSAFaunaFilters from './DSAFaunaFilters';
import DSAHuntingSummary from './DSAHuntingSummary';
import DSAHuntingTypeWidget from './DSAHuntingTypeWidget';
import DSAHuntingModifiers from './DSAHuntingModifiers';
import DSAShotModifiers from './DSAShotModifiers';

// import DSARandomFauna from './DSARandomFauna';
import {Fauna,
  HuntingTypes,
  HuntingGroundNames,
  Weather,
  ShotModifiers} from "../data/DSAFaunaData";

const styles = {
  root: {
    flexGrow: 1,
  }
};

const defaultHuntingType = HuntingTypes.find(h => h.name === "Pirsch")
const defaultHuntingGround = HuntingGroundNames[3];
const defaultWeather = Weather[0];
const defaultShot = {art: "Keine Erschwernis", fk: 0, tp: 0};
const defaultSight = ShotModifiers.sight[0];

class FaunaMain extends React.Component {

  state = {
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
    }

  onFilterChanged = (filter) => {
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

  onModifiersChanged = (modifiers) => {
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

  onHuntingTypeChanged = (newType) => {
    this.setState({ huntingtype: newType })
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
    const filteredFauna = this.getFilteredFauna(Fauna, this.state.filter);
    const { classes } = this.props;
    return (<main className={classes.root}>
      <DSAGrid>
        <DSAGridRow>
          <DSAInfoBox title="Jagdtalent">
            <DSAGrid>
              <DSAHuntingTypeWidget
                onChange={this.onHuntingTypeChanged}
                huntingtype={this.state.huntingtype} />
              <DSAHuntingModifiers
                onChange={this.onModifiersChanged}
                modifiers={this.state.modifiers}
                talent={this.state.huntingtype.tierkunde} />
            </DSAGrid>
          </DSAInfoBox>
        </DSAGridRow>
        {this.state.huntingtype.shot ?
        <DSAGridRow>
          <DSAInfoBox title="Schuss">
            <DSAShotModifiers
              onChange={this.onModifiersChanged}
              modifiers={this.state.modifiers} />
          </DSAInfoBox>
        </DSAGridRow>
          : "" }
        <DSAGridRow>
          <DSAHuntingSummary
            modifiers={this.state.modifiers}
            type={this.state.huntingtype}
            />
        </DSAGridRow>
        <DSAGridRow>
          <DSAFaunaFilters
              fauna={filteredFauna}
              onChange={this.onFilterChanged}
              selection={this.state.filter} />
        </DSAGridRow>
        <DSAGridRow>
          <DSAFaunaGrid
            fauna={filteredFauna}
            modifiers={this.state.modifiers} />
        </DSAGridRow>
      </DSAGrid>
    </main>);
  }
}
/*
        <DSARandomFauna
            fauna={filteredFauna}
            selection={this.state.filter} />
*/

FaunaMain.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FaunaMain);
