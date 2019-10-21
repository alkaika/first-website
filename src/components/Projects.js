import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText  } from 'react-mdl';

export default class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      activeTab: 0 
    };
  }

  toggleCategories = () => {
    if (this.state.activeTab === 0) {
      return (
      <div>
      <div style={{paddingTop: '10px', paddingBottom: '10px'}} className='card-content'>
        <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', display: 'flex', justifyContent: 'center',
            background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png) center / cover'}}
          >
            Multi-Face Image Recognition (Clarifai API, Heroku)
          </CardTitle>
            <CardText style={{fontSize: 18}}>
              Register, then Sign-In. Use any URL with a 'JPG' The API will detect every face in the image. You may use example shortened URL: https://bit.ly/32AH9km
            </CardText>
            <CardActions border>
              <Button 
                colored style={{fontSize: 18}}
                href='https://multi-image-face-recognition.netlify.com/'
                target='_blank'
              >
                LiveDemo
              </Button>
              <Button 
                colored style={{fontSize: 18}} 
                href='https://github.com/alkaika/image_recognition'
                target='_blank'
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>

        <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', display: 'flex', justifyContent: 'center',
            background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png) center / cover'}}
          >
            Instant Messaging App (Material UI, Firebase)
          </CardTitle>
            <CardText style={{fontSize: 18}}>
              Register, then Sign-In. Ask someone else to register or create another account to test out the live chat features.
            </CardText>
            <CardActions border>
              <Button 
                colored style={{fontSize: 18}}
                href='https://instant-messenger-app.netlify.com/'
                target='_blank'
              >
                LiveDemo
              </Button>
              <Button 
                colored style={{fontSize: 18}} 
                href='https://github.com/alkaika/instant-messenger-app'
                target='_blank'
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>

        <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', display: 'flex', justifyContent: 'center',
            background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png) center / cover'}}
          >
            Robofriends Fetch API with Search Feature (Redux)
          </CardTitle>
            <CardText style={{fontSize: 18}}>
              Data is fetched from an API. Fetched data is combined with dymanic robot images. You can filter robots by name in the search box.
            </CardText>
            <CardActions border>
              <Button 
                colored style={{fontSize: 18}}
                href='https://robofriends-redux.netlify.com/'
                target='_blank'
              >
                LiveDemo
              </Button>
              <Button 
                colored style={{fontSize: 18}} 
                href='https://github.com/alkaika/robofriends_redux'
                target='_blank'
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>
      </div>
      <div style={{paddingTop: '20px'}} className='card-content'> 
        <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', display: 'flex', justifyContent: 'center',
            background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png) center / cover'}}
          >
            Multi-Form Submission (Material UI)
          </CardTitle>
            <CardText style={{fontSize: 18}}>
              Multi-Form Submission designed with Material UI. Front-End only. Not connected to backend server.
            </CardText>
            <CardActions border>
              <Button 
                colored style={{fontSize: 18}}
                href='https://multiform-submission.netlify.com/'
                target='_blank'
              >
                LiveDemo
              </Button>
              <Button 
                colored style={{fontSize: 18}} 
                href='https://github.com/alkaika/multiform'
                target='_blank'
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>

        <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', display: 'flex', justifyContent: 'center',
            background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png) center / cover'}}
          >
            Shopping Cart (Redux)
          </CardTitle>
            <CardText style={{fontSize: 18}}>
              Shopping Cart with expandable product details option and promotional discount feature.
            </CardText>
            <CardActions border>
              <Button 
                colored style={{fontSize: 18}}
                href='https://alkaika-shopping-cart.netlify.com/'
                target='_blank'
              >
                LiveDemo
              </Button>
              <Button 
                colored style={{fontSize: 18}} 
                href='https://github.com/alkaika/shopping-cart'
                target='_blank'
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>

        <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', display: 'flex', justifyContent: 'center',
            background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png) center / cover'}}
          >
            Todo List
          </CardTitle>
            <CardText style={{fontSize: 18}}>
              Todo List created using React.
            </CardText>
            <CardActions border>
              <Button 
                colored style={{fontSize: 18}}
                href='https://alkaika-react-todo-list.netlify.com/'
                target='_blank'
              >
                LiveDemo
              </Button>
              <Button 
                colored style={{fontSize: 18}} 
                href='https://github.com/alkaika/react-todo-list'
                target='_blank'
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>
      </div>
    </div>
    )
    } else if (this.state.activeTab === 1) {
      return (
      <div>
        <div style={{paddingTop: '10px', paddingBottom: '10px'}} className='card-content'>
        <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', display: 'flex', justifyContent: 'center',
            background: 'url(https://i1.wp.com/www.nuimedia.com/wp-content/uploads/2017/01/javascript-logo.png?ssl=1) center / cover'}}
          >
            CSS Background Generator
          </CardTitle>
            <CardText style={{fontSize: 18}}>
              CSS Background Generator written using Vanilla JavaScript
            </CardText>
            <CardActions border>
              <Button 
                colored style={{fontSize: 18}}
                href='https://alkaika-background-generator.netlify.com/'
                target='_blank'
              >
                LiveDemo
              </Button>
              <Button 
                colored style={{fontSize: 18}} 
                href='https://github.com/alkaika/background-generator'
                target='_blank'
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>
        </div>
      </div>
      )
    } 
  }

 render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>React</Tab>
          <Tab style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>Javascript</Tab>
        </Tabs>
        
          <Grid>
            <Cell col={12}>
              {this.toggleCategories()}   
            </Cell>
          </Grid>
               
        
      </div>    
    )
  }
}
