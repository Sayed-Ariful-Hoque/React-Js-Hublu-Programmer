import React , {useState} from 'react'

const App = () => {
  const [Name, setName] = useState("Hablu Programer")
  const ChangeName = () =>{
    setName("Sayed Ariful Hoque")
  }
  return (
    <div>
      <h1>My {Name}</h1>
      <button onClick={ChangeName}>click</button>
    </div>
  )
}

export default App
