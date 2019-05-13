import React from 'react';

import DSAFauna from './DSAFauna';

import DSADialog from '../controls/DSADialog';
import DSAButton from '../controls/DSAButton';
import DSAInfoBox from '../controls/DSAInfoBox';

import {Frequencies} from '../data/DSAFaunaData'


class DSARandomFauna extends React.Component {

  state = {
    open: false,
    fauna: {}
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleShow = () => {
    this.setState({
      open: true,
      fauna: this.getRandomFauna()
    });
  };

  getRandomFauna() {
    const {fauna, selection} = this.props;
    const selectedarea = selection.areas[0];

    // get the frequency bonus and save the min max values
    let min = 100;
    let max = -100;
    const weightedBonus = fauna.map((f) => {
      const area = f.areas.find(a => a.name === selectedarea);
      const bonus = Frequencies[area.frequency].bonus;
      if(bonus < min)
        min = bonus;
      if(bonus > max)
        max = bonus
      return bonus;
    });

    // now minmax the frequencies to 0-1 and add up the sum
    const range = max-min;
    let sum = 0
    const summedMinMaxBonus = weightedBonus.map((w) => {
      const minmax = (w-min) / range;
      sum += minmax;
      return sum;
    });

    // now pick a random number between 0 and sum
    const rand = Math.random() * sum;

    // and find first bonus that is within that range
    let i = summedMinMaxBonus.findIndex(s => s >= rand);
    if(i === -1) i = fauna.length - 1;

    return fauna[i];
  }

  render() {
    const {areas} = this.props.selection;
    if(areas.length !== 1)
      return <DSAInfoBox text="Wähle eine Region um ein zufälliges Tier auswählen zu können."/>
    return <>
      <DSAInfoBox text="Klicke um ein zufälliges Tier zu erhalten: ">
        <DSAButton size="small" onClick={this.handleShow}>
           zufälliges Tier
        </DSAButton>
      </DSAInfoBox>
      <DSADialog
        handleClose={this.handleClose}
        open={this.state.open}
        title={"Tier in " + areas[0]}
        text={"Der \"Zufall\" ist gewichtet nach der Häufigkeit der möglichen Tiere in der Region " + areas[0] + "."}>
        {this.state.open ? <DSAFauna fauna={this.state.fauna}/> : "" }
      </DSADialog>
      </>;
  }
}

export default DSARandomFauna;
