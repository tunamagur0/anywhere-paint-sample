import React from 'react';
import AnywherePaintContext from '../Contexts/AnywherePaintContext';
import { Radio, Grid } from '@material-ui/core';
import { PenStyle } from '../../node_modules/anywhere-paint/lib/lineRender.d';
import { flexSize } from '../typings/MaterialUI';
import {
  Theme,
  StyleRules,
  createStyles,
  WithStyles,
  withStyles,
} from '@material-ui/core';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    container: {
      '& div': {
        background: 'white',
      },
    },
  });

interface Props extends WithStyles<typeof styles> {
  ratio: flexSize;
}

interface State {
  Pencil: PenStyle;
}

class Blush extends React.Component<Props, State> {
  static contextType = AnywherePaintContext;
  private pencils: PenStyle[];
  constructor(props: Props) {
    super(props);
    this.state = {
      Pencil: 'Pencil',
    };
    this.pencils = ['Pencil', 'Eraser'];
  }

  private handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const style: PenStyle = e.target.value as PenStyle;
    this.setState({ Pencil: style });
    this.context.awPaint.changeMode(style);
  }

  render() {
    const buttons = this.pencils.map((e) => (
      <Radio
        value={e}
        onChange={(e) => this.handleChange(e)}
        checked={e === this.state.Pencil}
        key={e}
      />
    ));
    return (
      <Grid
        container
        item
        xs={this.props.ratio}
        className={this.props.classes.container}
        alignItems="center"
        justify="center"
      >
        {buttons}
      </Grid>
    );
  }
}

export default withStyles(styles)(Blush);
