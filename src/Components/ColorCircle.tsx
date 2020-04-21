import React from 'react';
import Grid from '@material-ui/core/Grid';
import AnywherePaintContext from '../Contexts/AnywherePaintContext';
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
  isInitialized: boolean;
}

class ColorCircle extends React.Component<Props> {
  static contextType = AnywherePaintContext;
  private div: React.RefObject<HTMLDivElement>;
  constructor(props: Props) {
    super(props);
    this.div = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.isInitialized)
      this.context.awPaint.createColorCircle(
        this.div.current as HTMLDivElement
      );
    return true;
  }

  render() {
    return (
      <Grid
        item
        className={this.props.classes.container}
        xs={this.props.ratio}
        ref={this.div}
      ></Grid>
    );
  }
}

export default withStyles(styles)(ColorCircle);
