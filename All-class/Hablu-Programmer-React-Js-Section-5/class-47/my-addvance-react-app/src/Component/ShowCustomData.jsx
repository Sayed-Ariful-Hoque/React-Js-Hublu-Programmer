import React from 'react'
import UseCostomHook from './UseCostomHook'
const ShowCustomData = () => {
    const [data] = UseCostomHook("https://jsonplaceholder.typicode.com/users")

  return (
    <div>
      {data &&
        data.map((item) => {
            return <p key={item.id}> {item.name + " " + item.address.street}</p>
        })
      }
    </div>
  )
}

export default ShowCustomData
