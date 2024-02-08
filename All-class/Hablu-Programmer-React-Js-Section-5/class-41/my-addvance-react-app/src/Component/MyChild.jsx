import React from 'react'

const MyChild = (props) => {
    props.onMathod('Hello my Prent')
  return (
    <div>
      <h1>{props.Title}</h1>
    </div>
  )
}

export default MyChild
