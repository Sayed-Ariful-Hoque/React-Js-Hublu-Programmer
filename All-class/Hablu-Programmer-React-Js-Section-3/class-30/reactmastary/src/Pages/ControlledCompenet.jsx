import React from 'react'

function ControlledCompenet() {
    function Submit (){

    }
  return (
    <div className='container'>
        <br />
      <input type="text"  placeholder='UnControlled Form' value="" onChange={Submit}/>
    </div>
  )
}

export default ControlledCompenet
