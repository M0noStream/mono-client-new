import React, { Component } from 'react'
import SingleStreamManage from '../components/SingleStreamManage.jsx'
export default class Manage extends Component {
  constructor(props){
    super(props);
    this.state={
      streams:[{streamName:"1", status:"active"}, {streamName:"2", status:"active"},{streamName:"3", status:"unactive"},{streamName:"4", status:"active"}
      ,{streamName:"5", status:"unactive"},{streamName:"6", status:"unactive"},{streamName:"7", status:"unactive"}],
      chunkedStreams: [],
      showingRaw:false,
      rawStream:{}
    }
  }

  componentDidMount = () => {
    this.splitStreams()
  }

  splitStreams = () => {
    let result = []
    const chunkSize = 4;
    for (let i = 0; i < this.state.streams.length; i += chunkSize) {
        const chunk = this.state.streams.slice(i, i + chunkSize);
        result.push(chunk)
    }
    this.setState({chunkedStreams:result})
  }

  showStreamRaw = (stream) => {
    this.setState({showingRaw:true, rawStream:stream})
  }

  render() {
    return (
      <div style={{display:'flex', flexDirection:'column'}}>
        {this.state.showingRaw?
          <div style={{position:'absolute', width: '200vh', height:'200vh', backgroundColor:'black', left:'0', top:'0'}}>
            <div style={{display:'flex', justifyContent:'center', alignContent:'center', backgroundColor:'white'}}>
              {JSON.stringify(this.state.rawStream, 4)}
            </div>
          </div>
        :null}
        {this.state.chunkedStreams.map((chunk, indexA) => {
          return(<div style={{width:'100%', padding:'10px', display:'flex', flexDirection:'row'}} key={'out'+indexA}>
            {chunk.map((stream, indexB) => {
                        return(
                          <SingleStreamManage stream={stream} key={'in' + indexB + indexA } display={this.showStreamRaw}/>
                        )
            })}
            </div>)
          

        })}
      </div>
    )
  }
}
