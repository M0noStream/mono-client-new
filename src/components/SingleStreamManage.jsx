import React, { Component } from 'react'
import '../pages/Manage.css'
import * as streams from '../services/Streams.js'

export default class SingleStreamManage extends Component {
  constructor(props){
    super(props);
    this.state={
      stream:this.props.stream
    }
  }

  deleteStream = async () => {
    const streamId = this.state.stream.id;
    try {
        await streams.delete_stream(streamId)
        await this.props.refreshData()
    } catch (e) {
        console.error('error: ', e);
    }
  }

  startStream = async () => {
    const streamId = this.state.stream.id;
    try {
        await streams.start_stream(streamId)
        await this.props.refreshData()
    } catch (e) {
        console.error('error: ', e);
    }
  }

  stopStream = async () => {
    const streamId = this.state.stream.id;
    try {
        await streams.stop_stream(streamId)
        await this.props.refreshData()
    } catch (e) {
        console.error('error: ', e);
    }
  }

  showRaw = () => {
    this.props.display(this.state.stream)
  }

  render() {
    return (
      <div className='single-stream-block'>
        <p>
          <b>{this.state.stream.streamName}</b>
          Status: {this.state.stream.status}
          <button onClick={this.showRaw}>Show Raw</button>
        </p>
      </div>
    )
  }
}
