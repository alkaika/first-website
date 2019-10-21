import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';


export default class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center', paddingTop: '2em'}}>
                <img
                  src='https://cdn2.iconfinder.com/data/icons/lil-faces/262/lil-face-2-512.png'
                  alt='avatar'
                  style={{height: '200px'}}
                />
            </div>
            <div style={{textAlign: 'center'}}>
            <h2 style={{paddingTop: '0.5em'}}>Alan Aspera</h2>
            <h4 style={{color: 'grey'}} >Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%', margin: 'auto'}}/>
            <h5>Address</h5>
            <p style={{fontSize: 18}}> 306 Waena Street, Wahiawa, HI 96786</p>
            <h5>Mobile Phone</h5>
            <p style={{fontSize: 18}}>(808) 478-2149</p>
            <h5>Email</h5>
            <p style={{fontSize: 18}}>alanaspera@gmail.com</p>
            <a 
              target='_blank' 
              href='https://alkaika-portfolio.netlify.com/'
              rel='noopener noreferrer'
            >
              <h5>
                Portfolio Website
              </h5>
            </a>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%', margin: 'auto'}}/>
            </div>
          </Cell>
          <Cell className='resume-right-col' col={8}>
            <h2>Education</h2>
            <Education 
                startYear={2019}
                endYear='Present'
                schoolName='Udemy Online Curriculum'
                schoolDescription="The Complete Web Developer in 2020: Zero to Mastery by Andrei Neagoie, 
                Advanced Javascript Concepts by Andrei Neagoie, 
                Watched many freeCodeCamp tutorials & Youtube Coding Videos"
            />
            <Education 
                startYear={2016}
                endYear={2017}
                schoolName='University of Phoenix'
                schoolDescription="Completed 7 of 12 courses of Masters in Business Administration. 
                Paused MBA program due to Post 9-11 G.I. Bill benefits running out. 
                I plan to complete program later in the future."
            />
            <Education 
                startYear={2014}
                endYear={2016}
                schoolName='University of Phoenix'
                schoolDescription="Bachelor's Degree, Criminal Justice Administration"
            />
            <Education 
                startYear={1998}
                endYear={2001}
                schoolName='The George Washington University'
                schoolDescription="Associate in Science, Clinical Laboratory Science & Medical Technology"
            />
            
            <hr style={{borderTop: '3px solid #833fb2'}}/>

            <h2>Experience</h2>

            <Experience 
                startYear={2015}
                endYear={'Present'}
                jobName='Private Investor'
                jobDescription="I taught myself to invest by borrowing investment books from my local library. 
                I've made and continue to make investments in stocks, real estate, cryptocurrencies, and early-stage
                startups."
            />

            <Experience 
                startYear={2007}
                endYear={'Present'}
                jobName='Owner - The UPS Store 5758'
                jobDescription="I take care of the administrative & financial duites of the business. My wife 
                is the manager who supervises all employees & oversees the day to day operations of our franchise. The UPS Store is an 
                alternative to the post office and offers a variety of services such as printing, mailbox, notary, 
                packing, shipping, shredding, fax, computer rental & freight services."
            />

            <hr style={{borderTop: '3px solid #833fb2'}}/>

            <h2>Technology Stack Experience</h2>

            <h5>
              HTML/CSS
            </h5>

            <h5>
              JavaScript
            </h5>

            <h5>
              Material UI
            </h5>

            <h5>
              React
            </h5>

            <h5>
              Redux
            </h5>

            <h5>
              NodeJS
            </h5>

            <h5>
              ExpressJS
            </h5>

            <h5>
              PostgreSQL
            </h5>
                   
          </Cell>
        </Grid>
      </div>
    )
  }
}

