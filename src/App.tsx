import React from 'react';
import AnywherePaint from 'anywhere-paint';
import ColorCircle from './Components/ColorCircle';
import Grid from '@material-ui/core/Grid';
import AnywherePaintContext from './Contexts/AnywherePaintContext';
import Blush from './Components/Blush';
import BlushSize from './Components/BlushSize';
import Layer from './Components/Layer';
import Undo from './Components/Undo';

interface State {
  awPaint: AnywherePaint | null;
  width: number;
  height: number;
  isInitialized: boolean;
}

class App extends React.Component<{}, State> {
  private container: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);
    this.state = {
      awPaint: null,
      width: 600,
      height: 400,
      isInitialized: false,
    };
    this.container = React.createRef();
  }

  componentDidMount() {
    this.setState({
      awPaint: new AnywherePaint(
        this.container.current as HTMLDivElement,
        this.state.width,
        this.state.height
      ),
      isInitialized: true,
    });
  }

  render() {
    return (
      <AnywherePaintContext.Provider value={{ awPaint: this.state.awPaint }}>
        <Grid container style={{ width: '100vw', height: '100vh' }}>
          <Grid container item xs={2}>
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
            <Grid
              container
              item
              alignItems="center"
              justify="center"
              style={{ width: '100%', overflow: 'hidden' }}
            >
              <Grid
                item
                style={{
                  width: this.state.width,
                  height: this.state.height,
                  border: 'solid 1px black',
                }}
                ref={this.container}
              ></Grid>
            </Grid>
            <Grid item></Grid>
          </Grid>
          <Layer ratio={2}></Layer>
        </Grid>
      </AnywherePaintContext.Provider>
    );
  }
}

export default App;
