import React from 'react';
import AnywherePaint from 'anywhere-paint';
import ColorCircle from './Components/ColorCircle';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AnywherePaintContext from './Contexts/AnywherePaintContext';

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
  componentDidUpdate() {
    // this.state.awPaint?.createColorCircle(
    //   document.getElementById('color-circle') as HTMLDivElement
    // );
  }

  render() {
    return (
      <AnywherePaintContext.Provider value={{ awPaint: this.state.awPaint }}>
        <Container style={{ width: '100vw', height: '100vh' }}>
          <Grid container style={{ width: '100%', height: '100%' }}>
            <ColorCircle
              ratio={3}
              isInitialized={this.state.isInitialized}
            ></ColorCircle>
            <Grid item xs={6} ref={this.container} />
          </Grid>
        </Container>
      </AnywherePaintContext.Provider>
    );
  }
}

export default App;
