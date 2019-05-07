import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap';
import {Frequencies} from './DSAFaunaData'
import DSAFauna from './DSAFauna';

export default class DSARandomFauna extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      fauna: {}
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({
      show: true,
      fauna: this.getRandomFauna()
    });
  }

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
      return <p>Wähle eine Region um ein zufälliges Tier auswählen zu können.</p>
    return (
      <div>
        <p>Klicke um ein zufälliges Tier zu erhalten.</p>

        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          zufälliges Tier
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Tier in {areas[0]}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Dein zufällig bestimmtes Tier:</p>
            {this.state.show ? <DSAFauna fauna={this.state.fauna}/> : "" }
            <p>Der "Zufall" ist gewichtet nach der Häufigkeit der möglichen Tiere in der Region {areas[0]}.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
