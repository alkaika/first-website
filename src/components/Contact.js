import React, { Component } from 'react';
import { Grid, Cell, ListItem, ListItemContent, List } from 'react-mdl';

export default class Contact extends Component {
  render() {
  return (
    <div className='contact-body'>
    <Grid className='contact-grid'>
      <Cell col={6}>
      <h2>Alan Aspera</h2>
      <img 
      src='https://cdn2.iconfinder.com/data/icons/lil-faces/262/lil-face-2-512.png'
      alt='avatar'
      style={{height: '250px'}}
      />
      </Cell>
      <Cell col={6}>
        <h2>Contact Me</h2>
        <hr/>
        <div className='contact-list'>
          <List>
            <ListItem>
              <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', justifyContent: 'center'}}>
                <i className='fa fa-phone-square' aria-hidden='true'/>
                Mobile (808) 478-2149
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', justifyContent: 'center'}}>
                <i className='fa fa-envelope' aria-hidden='true'/>
                alanaspera@gmail.com
              </ListItemContent>
            </ListItem>
          </List>
        </div>
      </Cell> 
    </Grid>
    
    </div>
  )
  }
}
