import React, { Component } from 'react'
import Logo from './assets/logo.png'
import './App.css'
import Console from './pages/Console';
import About from './pages/About';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      renderComponent: <Console/>
    }
  }

  onClickMenu = (e) => {
    let id = e.target.id
    switch(id){
      case '0':
        this.setState({renderComponent: <Console/>})
        break;
      case '1':
        this.setState({renderComponent: <About/>})
        break;
      default:
        this.setState({renderComponent: <div>Error</div>})
        break;
    }
  }

  render() {
    return (
      <div className='App'>
        <div className='logo-div'>
          <img alt="main logo" src={Logo} className='logo'/>
        </div>
        <div className='menu-div'>
          <button id={0} onClick={this.onClickMenu}>
            Console
          </button>
          <button id={1} onClick={this.onClickMenu}>
            About Us
          </button>
          <button>
            <a href="https://github.com/M0noStream" target="blank" style={{textDecoration:'none', color:'black'}}>Github</a>
          </button>
        </div>
        <div className='seperator-div' />
        <div className='body-div'>
          {this.state.renderComponent}
        </div>
      </div>
    )
  }
}
