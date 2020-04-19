import React from 'react';
import { flexSize } from '../typings/MaterialUI';
import AnywherePaintContext from '../Contexts/AnywherePaintContext';
import {
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  GridList,
  GridListTile,
} from '@material-ui/core';

interface Props {
  ratio: flexSize;
}

interface State {
  size: number;
}

class BlushSize extends React.Component<Props, State> {
  static contextType = AnywherePaintContext;
  private sizes: number[] = [1, 2, 3, 4, 5, 7, 9, 11, 13, 15, 17, 20];
  constructor(props: Props) {
    super(props);
    this.state = {
      size: 1,
    };
  }

  private handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = parseInt(e.target.value as string, 10);
    this.setState({ size: val });
    this.context.awPaint.setLineWidth(val);
  }

  render() {
    const blushSize = this.sizes.map((e) => (
      <GridListTile key={e}>
        <FormControlLabel
          value={e}
          label={`${e}px`}
          labelPlacement="bottom"
          control={<Radio color="primary" />}
          key={e}
        />
      </GridListTile>
    ));
    return (
      <Grid item xs={this.props.ratio}>
        <GridList style={{ height: '80%' }}>
          <RadioGroup
            row
            style={{ width: '100%' }}
            value={this.state.size}
            onChange={(e) => this.handleChange(e)}
          >
            {blushSize}
          </RadioGroup>
        </GridList>
      </Grid>
    );
  }
}

export default BlushSize;
