import React, { Component } from 'react'
import './App.css';
import Main from './components/Main'
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';

export default class App extends Component {
 render() {
  return (
   <div>
     <Layout>
      <Header 
        className='header-color'
        title={<Link style={{color: 'black', fontSize: 22, fontWeight: 'bold', textDecoration: 'none'}} to="/">MY PORTFOLIO</Link>}>
        <Navigation>
          <Link style={{color: 'black', fontSize: 20, fontWeight: 'bold'}} to="/AboutMe">About Me</Link>
          <Link style={{color: 'black', fontSize: 20, fontWeight: 'bold'}} to="/Contact">Contact</Link>
          <Link style={{color: 'black', fontSize: 20, fontWeight: 'bold'}} to="/Projects">Projects</Link>
          <Link style={{color: 'black', fontSize: 20, fontWeight: 'bold'}} to="/Resume">Resume</Link>
        </Navigation>
      </Header>
      <Drawer 
        title={<Link style={{color: 'black', fontSize: 22, fontWeight: 'bold', textDecoration: 'none'}} to="/">MY PORTFOLIO</Link>}>
        <Navigation>
          <Link style={{color: 'black', fontSize: 20, fontWeight: 'bold'}} to="/AboutMe">About Me</Link>
          <Link style={{color: 'black', fontSize: 20, fontWeight: 'bold'}} to="/Contact">Contact</Link>
          <Link style={{color: 'black', fontSize: 20, fontWeight: 'bold'}} to="/Projects">Projects</Link>
          <Link style={{color: 'black', fontSize: 20, fontWeight: 'bold'}} to="/Resume">Resume</Link>
        </Navigation>
      </Drawer>
      <Content>
        <Main />
      </Content>
    </Layout>
  </div>
  );
}
}

