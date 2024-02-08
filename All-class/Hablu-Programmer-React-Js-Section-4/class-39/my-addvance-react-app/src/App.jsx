import React , {useState} from 'react'

const App = () => {
  const [ColorName, setConlorName] = useState("Orange")

  return (
    <div>
      <h1>My Ffavorite Colore Is {ColorName}</h1>
      <button onClick={() => setConlorName("Green")}>Green</button>
      <button onClick={() => setConlorName("Blue")}>Blue</button>
      <button onClick={() => setConlorName("Red")}>Red</button>
      <button onClick={() => setConlorName("Yellow")}>Yellow</button>
      <button onClick={() => setConlorName("Dark")}>Dark</button>
    </div>
  )
}

export default App
