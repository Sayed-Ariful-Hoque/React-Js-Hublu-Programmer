import React from "react";

import Card from "./BlogWebsit/Card";
import Navbare from "./BlogWebsit/Navbare";
import Carousel from "./BlogWebsit/Carousel";
// const zog = 150 + 100

function Home(){
    return(
        <div>
        <Navbare/>
<div className='container mb-5 '>

        <Carousel/>
        <div className='row'>
          <div className='col-md-3  card-responsive'>
            <Card img="imgs/card-1.webp" title="Programing" pragrap="Some quick example text to build on the card title and make up the bulk of the card's content." button="submit" />
          </div>
          <div className='col-md-3 card-responsive'>
            <Card img="imgs/card-2.jpg" title="Programing" pragrap="Some quick example text to build on the card title and make up the bulk of the card's content." button="submit" />
          </div>
          <div className='col-md-3 card-responsive'>
            <Card img="imgs/card-3.jpg" title="Programing" pragrap="Some quick example text to build on the card title and make up the bulk of the card's content." button="submit" />
          </div>
          <div className='col-md-3 card-responsive'>
            <Card img="imgs/card-4.jpg" title="Programing" pragrap="Some quick example text to build on the card title and make up the bulk of the card's content." button="submit" />
          </div>
          <div className='col-md-3 card-responsive'>
            <Card img="imgs/card-5.jpg" title="Programing" pragrap="Some quick example text to build on the card title and make up the bulk of the card's content." button="submit" />
          </div>
          <div className='col-md-3 card-responsive'>
            <Card img="imgs/card-3.jpg" title="Programing" pragrap="Some quick example text to build on the card title and make up the bulk of the card's content." button="submit" />
          </div>
          <div className='col-md-3 card-responsive'>
            <Card img="imgs/card-4.jpg" title="Programing" pragrap="Some quick example text to build on the card title and make up the bulk of the card's content." button="submit" />
          </div>
          <div className='col-md-3 card-responsive'>
            <Card img="imgs/card-5.jpg" title="Programing" pragrap="Some quick example text to build on the card title and make up the bulk of the card's content." button="submit" />
          </div>
        </div>
      </div>

        </div>
    )
}

export default Home

// import React from 'react'

// function Home() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Home

