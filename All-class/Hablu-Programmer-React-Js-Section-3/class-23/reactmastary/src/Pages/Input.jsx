import React, { Component } from 'react'

 class Input extends Component {
    FormChange = (event) =>{
        console.log(event.target.name)
    }
    FormChangeName = (event) =>{
        console.log(event.target.name)
    }
    FormChangeselector= (event) =>{
        console.log(event.target.name)
    } 
    FormChangedate= (event) =>{
        console.log(event.target.name)
    }
    FormChangetextarea= (event) =>{
        console.log(event.target.name)
    }
  render() {
    return (
      <div className='container'>
        <input type="text" name='ChannelName' placeholder='ChannelName'onChange={this.FormChange} className='form-control'/>
        <input type="text" name='ChannelName' placeholder='ChannelName'onChange={this.FormChangeName} className='form-control'/>
        <select name="Catagory" onChange={this.FormChangeselector} className='form-control'>
          <option value="Programming">Programming</option>
          <option value="funny">funny</option>
          <option value="educations">educations</option>
          <option value="entertainment">entertainment</option>
        </select>
        <input type="date" name="CreationDate" onChange={this.FormChangedate}  className='form-control'/>
        <textarea  name="About" onChange={this.FormChangetextarea}  className='form-control' placeholder='tell me About YOur Self'/>
      </div>
    )
  }
}
export default Input