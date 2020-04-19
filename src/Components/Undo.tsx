import React from 'react';
import AnywherePaintContext from '../Contexts/AnywherePaintContext';
import { Grid, Button } from '@material-ui/core';
import { flexSize } from '../typings/MaterialUI';

interface Props {
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

export default Undo;
