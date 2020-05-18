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
import UtilButtons from './Components/UtilButtons';

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
  container: React.RefObject<HTMLDivElement> | null;
  width: number;
  height: number;
  isInitialized: boolean;
  isUpdated: boolean;
}

class App extends React.Component<WithStyles<typeof styles>, State> {
  constructor(props: WithStyles<typeof styles>) {
    super(props);
    this.state = {
      awPaint: null,
      container: null,
      width: 1200,
      height: 800,
      isInitialized: false,
      isUpdated: false,
    };
  }

  componentDidUpdate(prevProps: {}, prevState: State) {
    if (!prevState.isUpdated && this.state.isUpdated) {
      this.setState({ isUpdated: false });
    }
    console.log(this.state);
    // if (this.state.isUpdated) {
    //   this.setState({ isUpdated: false });
    // }
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <AnywherePaintContext.Provider
          value={{
            awPaint: this.state.awPaint,
            container: this.state.container,
          }}
        >
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
                <Undo
                  ratio={4}
                  onUpdate={() => this.setState({ isUpdated: true })}
                ></Undo>
                <UtilButtons ratio={4}></UtilButtons>
                <Blush ratio={4}></Blush>
              </Grid>
              <Canvas
                width={this.state.width}
                height={this.state.height}
                intialize={(
                  awPaint: AnywherePaint,
                  container: React.RefObject<HTMLDivElement>
                ) => {
                  this.setState({
                    awPaint: awPaint,
                    isInitialized: true,
                    container: container,
                  });
                }}
              ></Canvas>
              <Grid item></Grid>
            </Grid>
            <Layer
              ratio={2}
              isInitialized={this.state.isInitialized}
              isUpdated={this.state.isUpdated}
            ></Layer>
          </Grid>
        </AnywherePaintContext.Provider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
