import React, { Component } from 'react'
import Mayan from '../assets/mayan.jpeg'
import Igor from '../assets/igor.jpeg'
import Tomer from '../assets/tomer.jpeg'
import './About.css'
export default class About extends Component {
  render() {
    return (
      <div>
        <p className='about-paragraph'>
        There are many message broker platforms used by a wide range of consumers. Each platform uses a different structure of messages, making connecting two different platforms a tedious task, which requires development time.
        </p>
        <p className='about-paragraph'>
        MonoStream provides an open source agent which allows its users to share data between different message broker platforms in an easy, intuitive and secured way.
        </p>
      <div className='profile-img-container'>
        <label style={{display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center'}}>
          <img alt="mayan" src={Mayan}/>
          <p style={{display:'flex', justifyContent:'center', alignContent:'center', marginTop:'-10px'}}>Mayan Segal</p>
        </label>
        <label>
          <img alt="tomer" src={Tomer}/>
          <p style={{display:'flex', justifyContent:'center', alignContent:'center', marginTop:'-10px'}}>Tomer Kizel</p>
        </label>
        <label>
          <img alt="igor" src={Igor}/>
          <p style={{display:'flex', justifyContent:'center', alignContent:'center', marginTop:'-10px'}}>Igor Fridman</p>
        </label>

      </div>
      </div>

    )
  }
}
