import React from 'react'

function InlineStyle() {
    const towAndInlineSystem ={
        backgroundColor:"red",
        textAlign:"center",
        padding:"70px",
        color:"white"
    }
  return (
    <div>
      <h1 style={{color:"red", textAlign:"center"}}>This is my Parst InlineStyle CSS</h1>
      <h2 style={towAndInlineSystem}>This is my Parst InlineStyle CSS</h2>
    </div>
  )
}

export default InlineStyle
