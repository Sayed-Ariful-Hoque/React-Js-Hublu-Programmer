import React from 'react'

const DataReturn = (props) => {
  return (
    <div style={{border:"1px solid tomato", padding:"10px", textAlign:"center", width:"50%", margin: "20px auto", borderRadius:"5px"}}>
        <p>{props.name}</p>
        <p>{props.email}</p>  
        <p>{props.idname}</p>  
    </div>
  )
}

export default DataReturn
