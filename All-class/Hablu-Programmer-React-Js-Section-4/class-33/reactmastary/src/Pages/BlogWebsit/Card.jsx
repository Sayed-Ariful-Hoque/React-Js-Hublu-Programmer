import React from 'react'
import "../BlogWebsit/card.css"

function Card(props) {
    return (
        <div className=' mt-5'> 

            <div className="card ">
                <img src={props.img} className="card-img-top imgs" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.pragrap}</p>
                    <button type="button" class="btn btn-outline-primary">{props.button}</button>                </div>
            </div>

        </div>
    )
}

export default Card;
