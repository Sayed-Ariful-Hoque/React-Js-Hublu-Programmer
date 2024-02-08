import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import From from './From';
import MyChild from './Component/MyChild';
const App = () => {
  const Parentdata = "I Am Your Farent"
 const DataPassing = (para) =>{
  console.log(para)
 }

  return (
    <div className='container'>
      {/* <From/> */}
      <MyChild Title={Parentdata} onMathod={DataPassing} />
    </div>
  )
}

export default App
