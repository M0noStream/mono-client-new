import React, { Component } from 'react'
import '../pages/Console.css'
export default 
class DestinationDataInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TypeName:"",
            Cluster:"",
            Vhost:"",
            Username:"",
            Password:"",
            Exchange:"",
            SourceName:""
        }
    }

    componentDidMount = () => {
        if (Object.keys(this.props.oldData).length !== 0) {
            this.setState(this.props.oldData)
        }
    }

    handleTypeName = (e) => {
        let value = e.target.value
        this.setState({ TypeName: value })
    }

    handleSourceName = (e) => {
        let value = e.target.value
        this.setState({ SourceName: value })
    }

    handleExchange = (e) => {
        let value = e.target.value
        this.setState({ Exchange: value })
    }

    handleCluster = (e) => {
        let value = e.target.value
        this.setState({ Cluster: value })
    }

    handleVhost = (e) => {
        let value = e.target.value
        this.setState({ Vhost: value })
    }

    handleUsername = (e) => {
        let value = e.target.value
        this.setState({ Username: value })
    }

    handlePassword = (e) => {
        let value = e.target.value
        this.setState({ Password: value })

    }


    saveDataAndSet = () => {
        this.props.onSet(this.state)
        this.props.onPageMove(1)
    }

    saveDataAndDone = () => {
        this.props.onSet(this.state)
        setTimeout(() => {
            this.props.create()

        }, 100);
    }
    render() {
        return (
            <>
                <div style={{ display: 'flex', flexDirection: 'row' , height:'230px'}}>
                    <div className='form-container'>
                        <div className='data-form-labelinput'>
                            <label htmlFor='SourceName' className='console-content-input'>Destination Name</label>
                            <div className='input-container'>
                                <input id='SourceName' value={this.state.SourceName} type="text" onChange={this.handleSourceName} />
                            </div>
                        </div>
                        <div className='data-form-labelinput'>
                            <label htmlFor='Username' className='console-content-input'>User Name</label>
                            <div className='input-container'>
                                <input id='Username' value={this.state.Username} type="text" onChange={this.handleUsername} />
                            </div>
                        </div>
                        <div className='data-form-labelinput'>
                            <label htmlFor='Password' className='console-content-input'>Password</label>
                            <div className='input-container'>
                                <input id='Password' value={this.state.Password} type="password" onChange={this.handlePassword} />
                            </div>
                        </div>
                        <div className='data-form-labelinput'>
                            <label htmlFor='Cluster' className='console-content-input'>Cluster</label>
                            <div className='input-container'>
                                <input id='Cluster' value={this.state.Cluster} type="text" onChange={this.handleCluster} />
                            </div>
                        </div>
                    </div>
                    <div className='form-container'>

                        <div className='data-form-labelinput'>
                            <label htmlFor='TypeName' className='console-content-input'>Type Name</label>
                            <div className='input-container'>
                                <input id='TypeName' value={this.state.TypeName} type="text" onChange={this.handleTypeName} />
                            </div>
                        </div>
                        <div className='data-form-labelinput'>
                            <label htmlFor='Vhost' className='console-content-input'>Vhost</label>
                            <div className='input-container'>
                                <input id='Vhost' value={this.state.Vhost} type="text" onChange={this.handleVhost} />
                            </div>
                        </div>
                        <div className='data-form-labelinput'>
                            <label htmlFor='Exchange' className='console-content-input'>Exchange</label>
                            <div className='input-container'>
                                <input id='Exchange' value={this.state.Exchange} type="text" onChange={this.handleExchange} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='data-form-buttons'>
                    <button onClick={this.saveDataAndSet}>previous</button>
                    <button onClick={this.saveDataAndDone}>done</button>
                </div>
            </>
        )
    }
}
