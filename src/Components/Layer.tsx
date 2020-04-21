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
  Button,
  GridList,
  GridListTile,
} from '@material-ui/core';
import EachLayer from './EachLayer';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    buttons: {
      height: '10vh',
    },
    layers: {
      height: '80vh',
    },
  });

interface Props extends WithStyles<typeof styles> {
  ratio: flexSize;
  isInitialized: boolean;
}

interface State {
  images: Map<number, string> | null;
  names: Map<number, string> | null;
  current: number;
}

class Layer extends React.Component<Props, State> {
  static contextType = AnywherePaintContext;
  private id: number = -1;
  constructor(props: Props) {
    super(props);
    this.state = {
      images: null,
      names: null,
      current: 0,
    };
  }

  componentDidUpdate() {
    if (this.props.isInitialized && this.id === -1) {
      this.id = window.setInterval(() => {
        this.getNewData();
      }, 1000);
    }
    return true;
  }

  private getNewData() {
    const images = this.context.awPaint.getLayerImages();
    const names = this.context.awPaint.getLayerNames();
    this.setState({
      images: images,
      names: names,
      current: this.context.awPaint.current,
    });
  }

  render() {
    const eachLayer: JSX.Element[] = [];
    if (this.state.names) {
      for (const [key, value] of this.state.names) {
        const image = this.state.images?.get(key);
        if (image)
          eachLayer.unshift(
            <GridListTile key={key}>
              <EachLayer
                layerNum={key}
                name={value}
                image={image}
                onClick={() => {
                  this.context.awPaint.selectLayer(key);
                  this.getNewData();
                }}
                onChange={(value: string) => {
                  this.context.awPaint.renameLayer(key, value);
                  this.getNewData();
                }}
                isSelected={key === this.context.awPaint.selectingLayer}
                key={key}
              ></EachLayer>
            </GridListTile>
          );
      }
    }

    return (
      <Grid container item xs={this.props.ratio}>
        <Grid container item>
          <Grid
            container
            item
            justify="space-around"
            xs={12}
            className={this.props.classes.buttons}
          >
            <Grid item>
              <Button
                variant="contained"
                onClick={() => {
                  const layerNum: number = this.context.awPaint.addLayer();
                  this.context.awPaint.selectLayer(layerNum);
                  this.getNewData();
                }}
              >
                +
              </Button>
            </Grid>
            <Grid>
              <Button
                variant="contained"
                onClick={() => {
                  this.context.awPaint.removeLayer(
                    this.context.awPaint.selectingLayer
                  );
                  this.getNewData();
                }}
              >
                -
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <GridList cols={1} className={this.props.classes.layers}>
              {eachLayer}
            </GridList>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Layer);
