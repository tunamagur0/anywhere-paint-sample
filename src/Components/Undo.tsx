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
  onUpdate: () => void;
}

class Undo extends React.Component<Props> {
  static contextType = AnywherePaintContext;

  private handleClick(isUndo: boolean): void {
    if (isUndo) {
      this.context.awPaint.undo();
    } else {
      this.context.awPaint.redo();
    }
    this.props.onUpdate();
  }

  render() {
    return (
      <Grid
        container
        item
        className={this.props.classes.container}
        xs={this.props.ratio}
        alignItems="center"
        justify="space-around"
      >
        <Grid>
          <Button onClick={() => this.handleClick(true)}>Undo</Button>
        </Grid>
        <Grid>
          <Button onClick={() => this.handleClick(false)}>Redo</Button>
        </Grid>
        <Grid>
          <Button
            onClick={() => {
              this.context.awPaint.clearLayer(
                this.context.awPaint.selectingLayer
              );
              this.props.onUpdate();
            }}
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Undo);
