import React, { Component } from 'react'
import '../pages/Manage.css'
import * as streams from '../services/Streams.js'

export default class SingleStreamManage extends Component {
  constructor(props){
    super(props);
    this.state={
      stream:this.props.stream,
      readyDelete: false
    }
  }

  refreshData = async () => {
    try{
      let response = await streams.get_stream(this.state.stream.id)
      console.log(response);
      setTimeout(() => {
        this.setState({stream: response.data})
      }, 100);
    } catch (e){
      console.log(e);
    }
  }

  deleteStream = async () => {
    if(!this.state.readyDelete){
      this.setState({readyDelete:true})
      return
    }
    const streamId = this.state.stream.id;
    try {
        await streams.delete_stream(streamId)
        window.location.reload(false)
    } catch (e) {
        console.error('error: ', e);
    }
  }

  startStream = async () => {
    const streamId = this.state.stream.id;
    try {
        await streams.start_stream(streamId)
        setTimeout(async() => {
          await this.refreshData()
        }, 100);
    } catch (e) {
        console.error('error: ', e);
    }
  }

  stopStream = async () => {
    const streamId = this.state.stream.id;
    try {
        await streams.stop_stream(streamId)
        setTimeout(async() => {
          await this.refreshData()
        }, 100);
    } catch (e) {
        console.error('error: ', e);
    }
  }

  onStopStart = async () =>{
    if(this.state.stream.status==="Active"){
      await this.stopStream()
      return
    } 
    await this.startStream()
  }

  showRaw = () => {
    this.props.display(this.state.stream)
  }

  render() {
    return (
      <div className='single-stream-block'>
        <p>
          <b>{this.state.stream.agentName}</b>
          Status: {this.state.stream.status}
          <button className='single-button' onClick={this.showRaw}>Inspect</button>
          <div style={{width:'100%', height:'0.1px', backgroundColor:'black'}}/>
          <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
            <button className='single-button' style={{color:'red'}} onClick={this.deleteStream}>{this.state.readyDelete?"Confirm":"Delete"}</button>
            <button className='single-button' onClick={this.onStopStart}>{this.state.stream.status==="Active"?"Stop":"Start"}</button>
          </div>

        </p>
      </div>
    )
  }
}
