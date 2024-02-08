import React from 'react'
 const name = "Ariful"
 const Obj ={
    name:"Eshan",
    class: "Diplopma in Engineer",
    prof:"Programmer"
 }
function Expressions() {
  return (
    <div>
      <h1>This is Jsx Expressions {10+10}</h1>
      <h1>This is Jsx Expressions {name}</h1>
      <h1>This is Jsx Expressions {Obj.name}</h1>
      <h1>This is Jsx Expressions {Obj.prof}</h1>

      <h2>My Name Is {name + "" + " I AM Professional" +" " + Obj.prof +" "  + "& I read in" + " " + Obj.class }</h2>

      <h2>{`My Name Is ${name} I Am Professional ${Obj.prof} & I read in ${Obj.class}`}</h2>
    </div>
  )
}

export default Expressions
