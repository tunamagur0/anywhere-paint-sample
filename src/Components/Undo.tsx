import React from 'react';
import AnywherePaintContext from '../Contexts/AnywherePaintContext';
import { flexSize } from '../typings/MaterialUI';
import {
  Grid,
  Button,
  Theme,
  StyleRules,
  createStyles,
  WithStyles,
  withStyles,
} from '@material-ui/core';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    container: {
      '& button': {
        background: 'white',
      },
    },
  });

interface Props extends WithStyles<typeof styles> {
  ratio: flexSize;
}

class Undo extends React.Component<Props> {
  static contextType = AnywherePaintContext;

  private handleClick(isUndo: boolean): void {
    if (isUndo) {
      this.context.awPaint.undo();
    } else {
      this.context.awPaint.redo();
    }
  }

  render() {
    return (
      <Grid
        container
        item
        className={this.props.classes.container}
        xs={this.props.ratio}
        alignItems="center"
        justify="center"
      >
        <Button onClick={() => this.handleClick(true)}>Undo</Button>
        <Button onClick={() => this.handleClick(false)}>Redo</Button>
      </Grid>
    );
  }
}

export default withStyles(styles)(Undo);
