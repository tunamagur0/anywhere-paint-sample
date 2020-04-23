import React from 'react';
import AnywherePaintContext from '../Contexts/AnywherePaintContext';
import { flexSize } from '../typings/MaterialUI';
import {
  Grid,
  Button,
  Theme,
  StyleRules,
  createStyles,
  WithStyles,
  withStyles,
  TextField,
} from '@material-ui/core';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    container: {
      '& button': {
        background: 'white',
      },
    },
  });

interface Props extends WithStyles<typeof styles> {
  ratio: flexSize;
}

interface State {
  downloadName: string;
}

class UtilButtons extends React.Component<Props, State> {
  static contextType = AnywherePaintContext;
  constructor(props: Props) {
    super(props);
    this.state = {
      downloadName: '',
    };
  }

  private download(): void {
    const a = document.createElement('a');
    a.download = this.state.downloadName;
    a.href = this.context.awPaint.getIntegratedImage();
    a.click();
  }

  render() {
    return (
      <Grid
        container
        item
        className={this.props.classes.container}
        xs={this.props.ratio}
        alignItems="center"
        justify="space-evenly"
      >
        <Grid>
          <TextField
            variant="outlined"
            value={this.state.downloadName}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              this.setState({ downloadName: e.target.value })
            }
          />
        </Grid>
        <Grid>
          <Button onClick={() => this.download()}>Download</Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(UtilButtons);
