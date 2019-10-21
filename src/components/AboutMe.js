import React, { Component } from 'react';
import Veteran from './image/veteranimage.JPG'

export default class Aboutme extends Component {
  render() {
    return (
      <div>
        <div style={{textAlign: 'center', paddingTop: '2em'}}>
          <img
            src={Veteran}
            alt='avatar'
            style={{height: '200px'}}
          />
        </div>
        <div style={{margin: 30, paddingLeft: 5}}>
          <hr style={{borderTop: '3px solid #833fb2', width: '100%', margin: 'auto'}}/>
          <p style={{paddingTop: '1em', fontSize: 20, margin: 'auto'}}>
            I took my first JavaScript course in June 2019. Over the past 4 months, I've completed projects using HTML, CSS, Bootstrap, 
            Material UI, Javascript, React, Redux, Node.js, Express, PostgreSQL, Firebase. I've realized frameworks, libraries, NPM packages 
            are constantly changing and updating. However, coding is very enjoyable for me and I'm excited to learn new programming languages, 
            frameworks, and libraries. I'm looking forward to starting my new journey as a Web Developer. I worked in the medical field for 
            10 years before opening my own business. I'm an experienced business owner of over 12 years. I'm a self-taught investor and have 
            invested in a variety of assets such as stocks, real estate, cryptocurrencies, and early-stage startups. I'm also a veteran of the 
            Army National Guard, Army Reserve, Air Force Reserve and had the previlage to serve on active-duty for 3 years. I've been happily 
            married for 10 years and have a handsome 7 year-old son.
          </p>
        </div>
      </div>
    )
  }
}
