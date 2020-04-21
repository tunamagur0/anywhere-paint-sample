import React from 'react';
import AnywherePaint from 'anywhere-paint';
import ColorCircle from './Components/ColorCircle';
import Grid from '@material-ui/core/Grid';
import AnywherePaintContext from './Contexts/AnywherePaintContext';
import Blush from './Components/Blush';
import BlushSize from './Components/BlushSize';
import Layer from './Components/Layer';
import Undo from './Components/Undo';
import Canvas from './Components/Canvas';

import {
  withStyles,
  Theme,
  StyleRules,
  createStyles,
  WithStyles,
} from '@material-ui/core';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      width: '100vw',
      height: '100vh',
      background: '#818ea3',
      margin: 0,
    },
    container: {
      width: '100vw',
      height: '100vh',
      padding: '2.5vh 2.5vw 2.5vh 2.5vw',
    },
  });

interface State {
  awPaint: AnywherePaint | null;
  width: number;
  height: number;
  isInitialized: boolean;
}

class App extends React.Component<WithStyles<typeof styles>, State> {
  constructor(props: WithStyles<typeof styles>) {
    super(props);
    this.state = {
      awPaint: null,
      width: 1200,
      height: 800,
      isInitialized: false,
    };
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <AnywherePaintContext.Provider value={{ awPaint: this.state.awPaint }}>
          <Grid container className={this.props.classes.container}>
            <Grid
              container
              item
              xs={2}
              alignItems="stretch"
              justify="space-around"
            >
              <ColorCircle
                ratio={12}
                isInitialized={this.state.isInitialized}
              ></ColorCircle>
              <BlushSize ratio={12}></BlushSize>
            </Grid>
            <Grid
              container
              item
              xs={8}
              direction="column"
              alignItems="stretch"
              justify="space-around"
            >
              <Grid container item justify="center">
                <Undo ratio={4}></Undo>
                <Grid item xs={4}></Grid>
                <Blush ratio={4}></Blush>
              </Grid>
              <Canvas
                width={this.state.width}
                height={this.state.height}
                intialize={(awPaint: AnywherePaint) => {
                  this.setState({
                    awPaint: awPaint,
                    isInitialized: true,
                  });
                }}
              ></Canvas>
              <Grid item></Grid>
            </Grid>
            <Layer ratio={2} isInitialized={this.state.isInitialized}></Layer>
          </Grid>
        </AnywherePaintContext.Provider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
