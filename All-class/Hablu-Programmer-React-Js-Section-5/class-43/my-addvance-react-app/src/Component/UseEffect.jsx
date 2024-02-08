import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.title = `"welcomte to Hablu Chat" ${count}`
        setTimeout(() => {
            setCount(count + 1 )
        }, 1000);
    })
  return (
    <div>
      <p>Hablu sent You {count} Notification</p>
    </div>
  )
}

export default UseEffect
