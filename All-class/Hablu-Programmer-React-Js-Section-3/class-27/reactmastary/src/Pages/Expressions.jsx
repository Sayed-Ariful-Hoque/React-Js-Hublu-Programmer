import React from 'react'
 const name = "Ariful"
 const Obj ={
    name:"Eshan",
    Roll: 10,
    prof:"Programmer"
 }
function Expressions() {
  return (
    <div>
      <h1>This is Jsx Expressions {10+10}</h1>
      <h1>This is Jsx Expressions {name}</h1>
      <h1>This is Jsx Expressions {Obj.name}</h1>
      <h1>This is Jsx Expressions {Obj.prof}</h1>
    </div>
  )
}

export default Expressions
