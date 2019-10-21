import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Alan from './image/faceimage.jpg'

export default class Landingpage extends Component {
  render() {
    return (
      <div style={{height: '100%', width: '100%', margin: 'auto'}}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <div className='container'>
            <img 
            className='avatar-image'
            alt='avatar'
            src={Alan}
            />
            </div>
            <div className='banner-text'>
              <h2>Web Developer</h2>
              <hr/>
            <p>HTML | CSS | Material UI | JavaScript | React | Redux | NodeJS | Express | PostgreSQL</p>
            <div className='social-links'>
              <a href="https://github.com/alkaika" target="_blank" rel="noopener noreferrer">
                 <i className="fa fa-github-square" aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/alanaspera/" target="_blank" rel="noopener noreferrer">
                 <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              <a href="https://twitter.com/alan_aspera" target="_blank" rel="noopener noreferrer">
                 <i className="fa fa-twitter-square" aria-hidden="true" />
              </a>
             </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
