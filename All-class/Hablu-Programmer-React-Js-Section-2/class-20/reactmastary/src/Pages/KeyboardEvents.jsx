import React from 'react'

function KeyboardEvents() {
    const  onKeyUpText = () =>{
        console.log('key up')
    }
    const onKeyDownText = () =>{
        console.log('key Down')
    }
   
    const onKeyPresstext = () =>{
        console.log('key press')
    }
   
  return (
    <div>
      <h1>Keyboard Events</h1><br /><br />

      <h1> onKeyUp</h1>
      <input type="text" onKeyUp={onKeyUpText} placeholder='onkey up'/>

      <h1>onKeyDown</h1>
      <input type="text" onKeyDown={onKeyDownText} placeholder='onkey down'/>
      <h1>onKeyPress</h1>
      <input type="text" onKeyPress={onKeyPresstext} placeholder='onkey press'/>
      
    </div>
  )
}

export default KeyboardEvents
