import React from 'react'
import "./BlogCss/Blog.css"
function Carousel() {
    return (


        <div id="carouselExampleFade" class="carousel slide carousel-fade  container " data-bs-ride="carousel">
            <div class="carousel-inner">
                {/* part-1  */}
                <div class="carousel-item abcd active">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="imgs/blog-1.webp" class="d-block w-100" alt="blog-1.webp" />
                        </div>
                        <div className="col-md-6">
                            <p className='ShotTitle'>Programmer</p>
                            <h3 className='LongTitle'>Live With Anisul Islam Bhaiya</h3>
                            <p className='ShotTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ratione earum, architecto odio nam a quos enim quidem beatae at tenetur quas natus dicta voluptatum odit temporibus quasi officia quis saepe sed minima deserunt. Aspernatur corporis, nam reprehenderit quaerat voluptatum maiores sequi recusandae, fugit provident obcaecati quam. Error quia blanditiis veritatis quibusdam illum ipsam reiciendis velit neque iusto non repellendus similique dolores sed odio laboriosam quos ad voluptatem hic nihil exercitationem optio, voluptate perferendis ab possimus. Repudiandae aperiam distinctio ab dolorum voluptatum quasi, sed iure ut, tenetur qui expedita porro cum illo ullam in nesciunt vero aliquid consectetur quo aut?</p>
                            <p className='ChannelName'>Hablu Programmer</p>
                            <p className='ShotTitle'>2 February 2024</p>
                        </div>
                    </div>
                </div>
                {/* part-2  */}
                <div class="carousel-item ">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="imgs/blog-2.jpg" class="d-block w-100" alt="blog-2.jpg" />
                        </div>
                        <div className="col-md-6">
                            <p className='ShotTitle'>Programmer</p>
                            <h3 className='LongTitle'>Live With Anisul Islam Bhaiya</h3>
                            <p className='ShotTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ratione earum, architecto odio nam a quos enim quidem beatae at tenetur quas natus dicta voluptatum odit temporibus quasi officia quis saepe sed minima deserunt. Aspernatur corporis, nam reprehenderit quaerat voluptatum maiores sequi recusandae, fugit provident obcaecati quam. Error quia blanditiis veritatis quibusdam illum ipsam reiciendis velit neque iusto non repellendus similique dolores sed odio laboriosam quos ad voluptatem hic nihil exercitationem optio, voluptate perferendis ab possimus. Repudiandae aperiam distinctio ab dolorum voluptatum quasi, sed iure ut, tenetur qui expedita porro cum illo ullam in nesciunt vero aliquid consectetur quo aut?</p>
                            <p className='ChannelName'>Hablu Programmer</p>
                            <p className='ShotTitle'>2 February 2024</p>
                        </div>
                    </div>
                </div>
                {/* part-3 */}
                <div class="carousel-item ">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="imgs/blog-2.jpg" class="d-block w-100" alt="blog-2.jpg" />
                        </div>
                        <div className="col-md-6">
                            <p className='ShotTitle'>Programmer</p>
                            <h3 className='LongTitle'>Live With Anisul Islam Bhaiya</h3>
                            <p className='ShotTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ratione earum, architecto odio nam a quos enim quidem beatae at tenetur quas natus dicta voluptatum odit temporibus quasi officia quis saepe sed minima deserunt. Aspernatur corporis, nam reprehenderit quaerat voluptatum maiores sequi recusandae, fugit provident obcaecati quam. Error quia blanditiis veritatis quibusdam illum ipsam reiciendis velit neque iusto non repellendus similique dolores sed odio laboriosam quos ad voluptatem hic nihil exercitationem optio, voluptate perferendis ab possimus. Repudiandae aperiam distinctio ab dolorum voluptatum quasi, sed iure ut, tenetur qui expedita porro cum illo ullam in nesciunt vero aliquid consectetur quo aut?</p>
                            <p className='ChannelName'>Hablu Programmer</p>
                            <p className='ShotTitle'>2 February 2024</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon " aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        



    )
}

export default Carousel
