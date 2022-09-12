import React, { Component } from 'react'
import Create from './Create.jsx';
import Manage from './Manage.jsx';
import './Console.css'
import { get_streams } from '../services/Streams.js';
export default class Console extends Component {
  constructor(props){
    super(props);
    this.state={
      renderComponent: null,
      activeId:1,
      streams: []
    }
  }

  componentDidMount = async () => {
    await this.refreshData()
    this.setState({renderComponent: <Manage streams={this.state.streams}/>})

  }

  refreshData = async () => {
    try{
      let response = await get_streams()
      this.setState({streams: response.data})
    } catch (e){
      console.log(e);
    }
  }

  onChangeMenu = (e) => {
    let id = e.target.id
    switch(id){
      case '0':
        this.setState({renderComponent: <Create/>, activeId:0})
        break;
      case '1':
        this.setState({renderComponent: <Manage streams={this.state.streams}/>, activeId:1})
        break;
      default:
        this.setState({renderComponent: <div>Error</div>})
        break;
    }
  }

  render() {
    return (
      <div className='console-main'>
        <div className='console-menu'>
            <button id={0} onClick={this.onChangeMenu} className={this.state.activeId === 0?'console-menu-button-active':'console-menu-button'}>Create</button>
            <div style={{backgroundColor:'black', height:'0.5px'}}/>
            <button id={1} onClick={this.onChangeMenu} className={this.state.activeId === 1?'console-menu-button-active':'console-menu-button'}>Manage</button>
        </div>
        <div className='console-content'>
            {this.state.renderComponent}
        </div>
      </div>
    )
  }
}
