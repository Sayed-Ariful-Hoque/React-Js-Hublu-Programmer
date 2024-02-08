import React, { Component } from 'react'

 class Input extends Component {
    FormChange = (event) =>{
        console.log(event.target.value)
    }
    FormChangeName = (event) =>{
        console.log(event.target.name)
    }
  render() {
    return (
      <div className='container'>
        <input type="text" name='ChannelName' placeholder='ChannelName'onChange={this.FormChange}/>
        <input type="text" name='ChannelName' placeholder='ChannelName'onChange={this.FormChangeName}/>
      </div>
    )
  }
}
export default Input