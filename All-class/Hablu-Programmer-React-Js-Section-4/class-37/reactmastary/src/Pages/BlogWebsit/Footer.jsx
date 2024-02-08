import React from 'react'
import "../BlogWebsit/Footer.css"

function Footer() {
  return (
    <>
    <div className='bg-light'>
      <div className="container">
        <div className="row">
            <div className="col-md-8 mt-2">
                <h3>Newsletter Subscription.</h3>
                <p className='widthparagrap'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt minus ratione totam fugit numquam ullam, laudantium a sint cupiditate dicta? Deserunt consectetur, voluptas quos exercitationem repudiandae laudantium illo praesentium quisquam.</p>
            </div>
            <div className="col-md-4 mt-5">
                <div className="input-group">
                   <input type="text" className='form-control'/>
                   <img className='input-group-text' src="imgs/send-check-fill.svg" alt="send-check-fill.svg" />
                </div>
            </div>
        </div>
      </div>
    </div>
    <div className="copy-text bg-bule text-center  p-2 ">
        <p>Copyright All Reserved By Sayed Ariful Hoque</p>
    </div>
    </>
  )
}

export default Footer
