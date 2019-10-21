import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

export default class Skills extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={12}>
            <div style={{display: 'flex', fontSize: 18}}>
            {this.props.skill}
            <ProgressBar style={{margin: 'auto', width: '75%'}} progress={this.props.progress} />
            </div> 
          </Cell>
        </Grid>
      </div>
    )
  }
}