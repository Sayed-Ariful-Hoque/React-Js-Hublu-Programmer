import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  const [count, setCount] = useState(0)
  const [calculation, setCalculation] = useState(0)

  // useEffect(() => {
  //   document.title = `"welcomte to Hablu Chat" ${count}`

  //   setTimeout(() => {
  //     setCount(count + 1)
  //   }, 1000);
  // })
  useEffect(() => {
    setCalculation(() => count * 2)
  })

  return (
    <div>
      <p>Hablu Sent You {count} Notification</p>
      <p>Calculation: {calculation}</p>
      <button className='btn btn-primary' onClick={() => setCount((cal) => cal + 1
      )}>
        Count Me
      </button>
    </div>
  )
}

export default UseEffect
