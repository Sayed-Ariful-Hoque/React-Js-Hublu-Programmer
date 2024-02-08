import React, { Component } from 'react'
import Fiter from './Fiter'

 class WelcomeAdminFanel extends Component {
    constructor(props){
        super(props)
        this.state ={
            YOurAge: true
        }
    }
  render() {
    let ami
    if (this.state.YOurAge) {
        ami ="welcome to my Website"
        
    }
    else{
        ami = <Fiter/>
    }
    return (
      <div>
        <h1>{ami}</h1>
      </div>
    )
  }
}
export default WelcomeAdminFanel
