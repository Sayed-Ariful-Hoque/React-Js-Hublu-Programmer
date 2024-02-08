import React, { useState } from 'react'

const AppHome = () => {

    const [Toggle, setToggle] = useState()
  return (
    <div className='container'>
      
      <button className='btn btn-primary mt-5' onClick={() => {
        setToggle(!Toggle)
      }}>
        {
            Toggle? "Hide" : "Show"
        }
      </button>
      {
        Toggle && 
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident soluta sequi laboriosam rerum fugiat. Eum eveniet, iste saepe facere facilis impedit magni recusandae error voluptate reiciendis exercitationem beatae aliquid est!</p>
      }
    </div>
  )
}

export default AppHome
