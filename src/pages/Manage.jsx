import React, { Component } from 'react'
import SingleStreamManage from '../components/SingleStreamManage.jsx'
import './Manage.jsx'

export default class Manage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streams: this.props.streams,
      chunkedStreams: [],
      streamPages: [],
      showingRaw: false,
      rawStream: {},
      currentPage: 0
    }
  }

  componentDidMount = () => {
    if(this.state.streams.length === 0 ){
      return
    }
    this.splitStreamsToPages()
    setTimeout(() => {
      this.splitPages(this.state.streamPages[this.state.currentPage])
    }, 100);
  }

  maxPageNum = () => {
    return this.state.streamPages.length - 1
  }

  splitStreamsToPages = () => {
    let pages = []
    let pageSize = 8
    //set pages
    for (let i = 0; i < this.state.streams.length; i += pageSize) {
      const chunk = this.state.streams.slice(i, i + pageSize);
      pages.push(chunk)
    }
    this.setState({ streamPages: pages })
  }

  splitPages = (pageContent) => {
    this.setState({ chunkedStreams: [] }, () => {
      let result = []
      let chunkSize = 4;
      //set raws in pages
      for (let i = 0; i < pageContent.length; i += chunkSize) {
        const chunk = pageContent.slice(i, i + chunkSize);
        result.push(chunk)
      }
      this.setState({ chunkedStreams: result })
    })

  }

  showStreamRaw = (stream) => {
    this.setState({ showingRaw: true, rawStream: stream })
  }

  onNextPage = () => {
    this.setState((prevState) => ({ currentPage: prevState.currentPage + 1 }), () => {
      this.splitPages(this.state.streamPages[this.state.currentPage])
    })
  }

  onPrevPage = () => {
    this.setState((prevState) => ({ currentPage: prevState.currentPage - 1 }), () => {
      this.splitPages(this.state.streamPages[this.state.currentPage])
    })
  }

  closeRawStream = () => {
    this.setState({showingRaw:false, rawStream: {}})
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {this.state.showingRaw ?
          <div className='raw-settings-background'>
            <div className='raw-settings-div'>
              <button onClick={this.closeRawStream}>Close</button>
              <button onClick={() => navigator.clipboard.writeText(JSON.stringify(this.state.rawStream, null, 2))}>Copy</button>
              {<pre>{JSON.stringify(this.state.rawStream, null, 2) }</pre>}
            </div>
          </div>
          : null}
        <div style={{height:'500px'}}>
          {this.state.chunkedStreams.map((chunk, indexA) => {
            return (<div style={{ width: '100%', padding: '10px', display: 'flex', flexDirection: 'row' }} key={'out' + indexA}>
              {chunk.map((stream, indexB) => {
                return (
                  <SingleStreamManage stream={stream} key={'in' + indexB + indexA} display={this.showStreamRaw} />
                )
              })}
            </div>)
          })}
        </div>
        {this.maxPageNum() > 0 ?
          <div className='pages-buttons'>
            <button disabled={this.state.currentPage === 0} onClick={this.onPrevPage}>{'<'}</button>
            <button disabled={this.state.currentPage === this.maxPageNum()} onClick={this.onNextPage}>{'>'}</button>
          </div>
          : <div className='pages-buttons' />
        }
      </div>
    )
  }
}
