import React, { Component } from 'react'
import '../pages/Console.css'

export default class SourceDataInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeName: "",
            cluster: "",
            consumerGroup: "",
            autoCommit: true,
            consumeTimeoutMS: 10000,
            username: "",
            password: "",
            sourceName: ""
        }
    }

    componentDidMount = () => {
        if (Object.keys(this.props.oldData).length !== 0) {
            this.setState(this.props.oldData)
        }
    }

    handleTypeName = (e) => {
        let value = e.target.value
        this.setState({ typeName: value })
    }

    handleCluster = (e) => {
        let value = e.target.value
        this.setState({ cluster: value })

    }

    handleConsumerGroup = (e) => {
        let value = e.target.value
        this.setState({ consumerGroup: value })

    }

    handleAutoCommit = (e) => {
        let checked = e.target.checked
        this.setState({ autoCommit: checked })

    }

    handleConsumeTimeoutMS = (e) => {
        let value = e.target.value
        if (!isNaN(value)) {
            return
        }
        this.setState({ consumeTimeoutMS: value })

    }

    handleUsername = (e) => {
        let value = e.target.value
        this.setState({ username: value })
    }

    handlePassword = (e) => {
        let value = e.target.value
        this.setState({ password: value })

    }

    handleSourceName = (e) => {
        let value = e.target.value
        this.setState({ sourceName: value })

    }

    saveDataAndSet = (e) => {
        this.props.onSet(this.state)
        this.props.onPageMove(e.target.id)
    }

    render() {
        return (
            <>
                <div style={{ display: 'flex', flexDirection: 'row', height:'230px' }}>
                    <div className='form-container'>
                        <div className='data-form-labelinput'>
                            <label htmlFor='SourceName' className='console-content-input'>Source Name</label>
                            <div className='input-container'>
                                <input id='SourceName' value={this.state.sourceName} type="text" onChange={this.handleSourceName} />
                            </div>
                        </div>
                        <div className='data-form-labelinput'>
                            <label htmlFor='Username' className='console-content-input'>User Name</label>
                            <div className='input-container'>
                                <input id='Username' value={this.state.username} type="text" onChange={this.handleUsername} />
                            </div>
                        </div>
                        <div className='data-form-labelinput'>
                            <label htmlFor='Password' className='console-content-input'>Password</label>
                            <div className='input-container'>
                                <input id='Password' value={this.state.password} type="password" onChange={this.handlePassword} />
                            </div>
                        </div>
                        <div className='data-form-labelinput'>
                            <label htmlFor='AutoCommit' className='console-content-input'>Auto Commit</label>
                            <div className='input-container'>
                                <input id='AutoCommit' checked={this.state.autoCommit} type="checkbox" onChange={this.handleAutoCommit} />
                            </div>
                        </div>
                    </div>
                    <div className='form-container'>
                        <div className='data-form-labelinput'>
                            <label htmlFor='Cluster' className='console-content-input'>Cluster</label>
                            <div className='input-container'>
                                <input id='Cluster' value={this.state.cluster} type="text" onChange={this.handleCluster} />
                            </div>
                        </div>
                        <div className='data-form-labelinput'>
                            <label htmlFor='TypeName' className='console-content-input'>Type Name</label>
                            <div className='input-container'>
                                <input id='TypeName' value={this.state.typeName} type="text" onChange={this.handleTypeName} />
                            </div>
                        </div>
                        <div className='data-form-labelinput'>
                            <label htmlFor='ConsumeTimeoutMS' className='console-content-input'>Consume Timeout MS</label>
                            <div className='input-container'>
                                <input id='ConsumeTimeoutMS' value={this.state.consumeTimeoutMS} type="text" onChange={this.handleConsumeTimeoutMS} />
                            </div>
                        </div>
                        <div className='data-form-labelinput'>
                            <label htmlFor='ConsumerGroup' className='console-content-input'>Consumer Group</label>
                            <div className='input-container'>
                                <input id='ConsumerGroup' value={this.state.consumerGroup} type="text" onChange={this.handleConsumerGroup} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='data-form-buttons'>
                    <button id={0} onClick={this.saveDataAndSet}>previous</button>
                    <button id={2} onClick={this.saveDataAndSet}>next</button>
                </div>
            </>
        )
    }
}
