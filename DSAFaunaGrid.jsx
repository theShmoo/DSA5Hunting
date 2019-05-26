import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import DSAFauna from './DSAFauna.jsx';
import { DSAGrid, DSAGridItem} from '../controls/DSAGrid';
import DSAInfoBox from '../controls/DSAInfoBox';

const styles = {
  root: {
    flexGrow: 1,
  }
};

class DSAFaunaGrid extends React.Component {

  render()
  {
    const { classes, fauna } = this.props;
    const all = fauna.map((f, i) => {
      return (
        <DSAGridItem xs={12} sm={6} md={4} lg={3} key={i}>
          <DSAFauna fauna={f} />
        </DSAGridItem>);
    })
    return (<div className={classes.root}>
        <DSAInfoBox title="Tiere">
          <DSAGrid>{all}</DSAGrid>
        </DSAInfoBox>
      </div>
    );
  }
}

DSAFaunaGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DSAFaunaGrid);
