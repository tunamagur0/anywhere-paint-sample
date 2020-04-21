import React from 'react';
import {
  Theme,
  StyleRules,
  createStyles,
  WithStyles,
  withStyles,
  Card,
  CardMedia,
  CardContent,
  TextField,
} from '@material-ui/core';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      display: 'flex',
    },
    media: {
      width: '75%',
    },
    content: {
      display: 'flex',
    },
  });

interface Props extends WithStyles<typeof styles> {
  image: string;
  name: string;
  layerNum: number;
  isSelected: boolean;
  onClick: () => void;
  onChange: (value: string) => void;
}

class EachLayer extends React.Component<Props> {
  private handleChange(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    const value: string = e.target.value;
    this.props.onChange(value);
  }

  render() {
    return (
      <Card
        onClick={() => this.props.onClick()}
        className={this.props.classes.root}
        style={{
          border: `solid 1px ${this.props.isSelected ? 'red' : 'black'}`,
        }}
      >
        <CardMedia
          className={this.props.classes.media}
          image={this.props.image}
        />
        <div className={this.props.classes.name}>
          <CardContent className={this.props.classes.content}>
            <TextField
              variant="outlined"
              value={this.props.name}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                this.handleChange(e)
              }
            />
          </CardContent>
        </div>
      </Card>
    );
  }
}

export default withStyles(styles)(EachLayer);
