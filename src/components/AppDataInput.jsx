import React, { Component } from 'react'
import '../pages/Console.css'

export default class AppDataInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTransacted: false,
            innerDepthQueue: 100,
            agentName: ""
        }
    }
    componentDidMount = () => {
        if (Object.keys(this.props.oldData).length !== 0) {
            this.setState(this.props.oldData)
        }
    }

    handleIsTransacted = (e) => {
        let checked = e.target.checked
        this.setState({ isTransacted: checked })
    }

    handleAgentName = (e) => {
        let value = e.target.value
        this.setState({agentName: value})
    }

    handleInnerDepthQueue = (e) => {
        let value = e.target.value
        if (isNaN(value)) {
            return
        }
        this.setState({ innerDepthQueue: value })
    }

    saveDataAndSet = () => {
        this.props.onSet(this.state)
        this.props.onPageMove(1)
    }

    render() {
        return (
            <>
                <div className='form-container' style={{height:'230px'}}>
                    <div className='data-form-labelinput'>
                        <label htmlFor='AgentName' className='console-content-input'>Agent Name</label>
                        <div className='input-container'>
                            <input id='AgentName' checked={this.state.agentName} type="text" onChange={this.handleAgentName} />
                        </div>
                    </div>
                    <div className='data-form-labelinput'>
                        <label htmlFor='IsTransacted' className='console-content-input'>Is Transacted?</label>
                        <div className='input-container'>
                            <input id='IsTransacted' checked={this.state.isTransacted} type="checkbox" onChange={this.handleIsTransacted} />
                        </div>
                    </div>
                    <div className='data-form-labelinput'>
                        <label htmlFor='InnerDepthQueue' className='console-content-input'>Inner Depth Queue</label>
                        <div className='input-container'>
                            <input id='InnerDepthQueue' value={this.state.innerDepthQueue} type="text" onChange={this.handleInnerDepthQueue} />
                        </div>
                    </div>
                    
                </div>
                <div className='data-form-buttons'>
                    <button disabled>previous</button>
                    <button onClick={this.saveDataAndSet}>next</button>
                </div>
            </>
        )
    }
}
