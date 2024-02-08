import React, { Component, useState } from 'react'

 class Input extends Component {

  state ={
    ChannelName: "",
    Subscriber: "",
    Catagory:"",
    CreationDate: "",
    About: "",
    gander: "",
    checkbox: false,

  }
    FormChange = (event) =>{
        this.setState({
          [event.target.name]: event.target.value
        })
    }
    CheckBoxHandeler = (event) =>{
        this.setState ({
          checkbox:event.target.checked
        })
    }

    
  render() {
    const {ChannelName, Subscriber, Catagory, CreationDate, About,checkbox} = this.setState
    return (
      <div className='container'>
        <input type="text" name='ChannelName' placeholder='ChannelName'onChange={this.FormChange} value={ChannelName} className='form-control'/>
        <input type="text" name='Subscriber' placeholder='Subscriber'onChange={this.FormChange} value={Subscriber} className='form-control'/>
        <select name="Catagory" onChange={this.FormChange} value={Catagory} className='form-control'>
          <option value="Programming">select</option>
          <option value="Programming">Programming</option>
          <option value="funny">funny</option>
          <option value="educations">educations</option>
          <option value="entertainment">entertainment</option>
        </select>
        <input type="date" name="CreationDate" onChange={this.FormChange}  value={CreationDate} className='form-control'/>
        <textarea  name="About" onChange={this.FormChange} value={About}  className='form-control' placeholder='tell me About YOur Self'/>
        <div>
          <input type="radio" name="gander" value="male" onChange={this.FormChange} />
          <label htmlFor="gender"> Male</label>
          <input type="radio" name="gander" value="Female" onChange={this.FormChange} />
          <label htmlFor="gender"> FeMale</label>
        </div>
        <input type="checkbox" name="checkbox" checked={checkbox}  onChange={this.CheckBoxHandeler} />
        <label htmlFor="checkbox">I Agre & continu</label> <br />
        <button className='btn btn-primary' onClick={() => console.log(this.state)}>Submit</button>
      </div>
    )
  }
}
export default Input