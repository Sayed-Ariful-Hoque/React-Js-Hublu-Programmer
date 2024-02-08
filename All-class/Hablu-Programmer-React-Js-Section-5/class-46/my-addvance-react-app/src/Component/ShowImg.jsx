import React, { useEffect, useState } from 'react'

const ShowImg = () => {
    const [showImg, setShowImg] = useState(null)

    useEffect(() =>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) =>setShowImg(data.message))
    },[])
  return (
    <div>
      {showImg &&
        <img src={showImg} alt="" />
      }
    </div>
  )
}

export default ShowImg
