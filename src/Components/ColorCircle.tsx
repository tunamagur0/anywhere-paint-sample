import React from 'react';
import Grid from '@material-ui/core/Grid';
import AnywherePaintContext from '../Contexts/AnywherePaintContext';

interface Props {
  ratio:
    | boolean
    | 'auto'
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | undefined;
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
    return <Grid item xs={this.props.ratio} ref={this.div}></Grid>;
  }
}

export default ColorCircle;
