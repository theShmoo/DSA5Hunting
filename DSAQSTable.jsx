import React, { Component } from 'react';
import {Table} from 'react-bootstrap';

export default class DSAQSTable extends Component {

  render() {
    const rows = this.props.info.map((row, i) => {
      return <tr key={i}><td>{i+1}</td><td>{row}</td></tr>
    })
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>QS</th>
            <th>Vorteil</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    );
  }
}
