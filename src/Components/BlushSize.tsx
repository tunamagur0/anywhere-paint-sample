import React from 'react';
import { flexSize } from '../typings/MaterialUI';
import AnywherePaintContext from '../Contexts/AnywherePaintContext';
import { Grid } from '@material-ui/core';

interface Props {
  ratio: flexSize;
}

interface State {
  sizes: number[];
}

class BlushSize extends React.Component<Props, State> {
  static contextType = AnywherePaintContext;
  constructor(props: Props) {
    super(props);
    this.state = {
      sizes: [1, 2, 3, 4, 5, 7, 9, 11, 13, 15, 17, 20],
    };
  }

  render() {
    return <Grid item xs={this.props.ratio}></Grid>;
  }
}

export default BlushSize;
