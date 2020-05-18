import React from 'react';
import Grid from '@material-ui/core/Grid';
import AnywherePaintContext from '../Contexts/AnywherePaintContext';
import {
  Theme,
  StyleRules,
  createStyles,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import AnywherePaint from 'anywhere-paint';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    canvasContainer: {
      '& div': {
        background: 'white',
      },
    },
  });

interface Props extends WithStyles<typeof styles> {
  width: number;
  height: number;
  intialize: (
    awPaint: AnywherePaint,
    container: React.RefObject<HTMLDivElement>
  ) => void;
}

class Canvas extends React.Component<Props> {
  static contextType = AnywherePaintContext;
  private container: React.RefObject<HTMLDivElement>;
  constructor(props: Props) {
    super(props);
    this.container = React.createRef();
  }

  componentDidMount() {
    this.props.intialize(
      new AnywherePaint(
        this.container.current as HTMLDivElement,
        this.props.width,
        this.props.height
      ),
      this.container
    );
  }

  render() {
    return (
      <Grid
        container
        item
        alignItems="center"
        justify="center"
        className={this.props.classes.canvasContainer}
      >
        <Grid
          item
          style={{
            width: this.props.width,
            height: this.props.height,
            border: 'solid 1px black',
          }}
          ref={this.container}
        ></Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Canvas);
