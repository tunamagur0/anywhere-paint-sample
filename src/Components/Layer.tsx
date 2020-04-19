import React from 'react';
import Grid from '@material-ui/core/Grid';
import AnywherePaintContext from '../Contexts/AnywherePaintContext';
import { flexSize } from '../typings/MaterialUI';
interface Props {
  ratio: flexSize;
}

class Layer extends React.Component<Props> {
  static contextType = AnywherePaintContext;

  render() {
    return <Grid item xs={this.props.ratio}></Grid>;
  }
}

export default Layer;
