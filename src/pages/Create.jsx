import React, { Component } from 'react'
import SourceDataInput from '../components/SourceDataInput.jsx'
import AppDataInput from '../components/AppDataInput.jsx';
import DestinationDataInput from '../components/DestinationDataInput.jsx';
import {create_stream } from '../services/Streams.js'

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appData: {},
            sourceData: {},
            destinationData: {},
            renderComponent: null,
            activeId: 0,
            loading: false
        }
    }

    componentDidMount = () => {
        this.setState({ renderComponent: <AppDataInput onPageMove={this.onPageMove} onSet={this.onSetAppData} oldData={this.state.appData} /> })
    }

    onCreate = async () =>{
        let AppData = this.state.appData
        AppData.Source = this.state.sourceData
        AppData.Destination = this.state.destinationData
        console.log(AppData);
        this.setState({loading:true})
        try{
            await create_stream(AppData);
        } catch (e){
            this.setState({error: true})
        } finally {
            this.setState({loading: false})
        }
    }

    onSetAppData = (appData) => {
        console.log(appData);
        this.setState({ appData: appData })
    }

    onSetSourceData = (sourceData) => {
        console.log(sourceData);
        this.setState({ sourceData: sourceData })
    }

    onSetDestinationData = (destinationData) => {
        console.log(destinationData);
        this.setState({ destinationData: destinationData })
    }

    onPageMove = (id) => {
        this.setState({ activeId: id }, () => {
            this.onStageChange()
        })
    }

    onStageChange = () => {
        let id = "" + this.state.activeId
        switch (id) {
            case '0':
                this.setState({ renderComponent: <AppDataInput onPageMove={this.onPageMove} onSet={this.onSetAppData} oldData={this.state.appData} /> })
                break;
            case '1':
                this.setState({ renderComponent: <SourceDataInput onPageMove={this.onPageMove} onSet={this.onSetSourceData} oldData={this.state.sourceData} /> })
                break;
            case '2':
                this.setState({ renderComponent: <DestinationDataInput create={this.onCreate} onPageMove={this.onPageMove} onSet={this.onSetDestinationData} oldData={this.state.destinationData} /> })
                break;
            default:
                this.setState({renderComponent: <div>Error</div>})
                break;
        }
    }

    render() {
        return (
            <div>{this.state.renderComponent}</div>
        )
    }
}

