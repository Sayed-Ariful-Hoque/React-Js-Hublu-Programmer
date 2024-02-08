import React, { Component } from 'react'
import './BlogCss/Blog.css'

 class Carousel extends Component {
  constructor(props){
    super(props)
        this.state = {
            ShotTitle: {
                ShortTitle1: "Programmer",
                ShortTitle2: "Pro Web Devoloper",
                ShortTitle3: "Free Web Devoloper",
            },
            LongTitle: {
                LongTitle1 : "Live With Anisul Islam Bhaiya",
                LongTitle2 : "Live With Zankar Mahabub vaiya",
                LongTitle3 : "Totul and Eshan vai",
            },
            ParaGrap: {
                Pragrap1 : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ratione earum, architecto odio nam a quos enim quidem beatae at tenetur quas natus dicta voluptatum odit temporibus quasi officia quis saepe sed minima deserunt. Aspernatur corporis, nam reprehenderit quaerat voluptatum maiores sequi recusandae, fugit provident obcaecati quam. Error quia blanditiis veritatis quibusdam illum ipsam reiciendis velit neque iusto non repellendus similique dolores sed odio laboriosam quos ad voluptatem hic nihil exercitationem optio, voluptate perferendis ab possimus. Repudiandae aperiam distinctio ab dolorum voluptatum quasi, sed iure ut, tenetur qui expedita porro cum illo ullam in nesciunt vero aliquid consectetur quo aut?",
                Pragrap2 : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ratione earum, architecto odio nam a quos enim quidem beatae at tenetur quas natus dicta voluptatum odit temporibus quasi officia quis saepe sed minima deserunt. Aspernatur corporis, nam reprehenderit quaerat voluptatum maiores sequi recusandae, fugit provident obcaecati quam. Error quia blanditiis veritatis quibusdam illum ipsam reiciendis velit neque iusto non repellendus similique dolores sed odio laboriosam quos ad voluptatem hic nihil exercitationem optio, voluptate perferendis ab possimus. Repudiandae aperiam distinctio ab dolorum voluptatum quasi, sed iure ut, tenetur qui expedita porro cum illo ullam in nesciunt vero aliquid consectetur quo aut?",
                Pragrap3 : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ratione earum, architecto odio nam a quos enim quidem beatae at tenetur quas natus dicta voluptatum odit temporibus quasi officia quis saepe sed minima deserunt. Aspernatur corporis, nam reprehenderit quaerat voluptatum maiores sequi recusandae, fugit provident obcaecati quam. Error quia blanditiis veritatis quibusdam illum ipsam reiciendis velit neque iusto non repellendus similique dolores sed odio laboriosam quos ad voluptatem hic nihil exercitationem optio, voluptate perferendis ab possimus. Repudiandae aperiam distinctio ab dolorum voluptatum quasi, sed iure ut, tenetur qui expedita porro cum illo ullam in nesciunt vero aliquid consectetur quo aut?"
            },
            ChannelName: {
                ChannelName1: "Lain With Anisul Islam vaiya",
                ChannelName2: "Progra Hero",
                ChannelName3: "Hublu Programer"
            },
            dateShort: {
                dateShort1: "2 February 2021",
                dateShort2: "2 February 2022",
                dateShort3: "2 February 2023",
            }
            

    }
  }
  render() {
    return (
      <div>
        
        <div id="carouselExampleFade" class="carousel slide carousel-fade  container mt-3" data-bs-ride="carousel">
            <div class="carousel-inner">
                {/* part-1  */}
                <div class="carousel-item  active">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="imgs/blog-1.webp" class="d-block w-100" alt="blog-1.webp" />
                        </div>
                        <div className="col-md-6">
                            <p className='ShotTitle'>{this.state.ShotTitle.ShortTitle1}</p>
                            <h3 className='LongTitle'>{this.state.LongTitle.LongTitle1}</h3>
                            <p className='ShotTitle'>{this.state.ParaGrap.Pragrap1}</p>
                            <p className='ChannelName'>{this.state.ChannelName.ChannelName1}</p>
                            <p className='ShotTitle'>{this.state.dateShort.dateShort1}</p>
                        </div>
                    </div>
                </div>
                {/* part-2  */}
                <div class="carousel-item">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="imgs/blog-1.webp" class="d-block w-100" alt="blog-1.webp" />
                        </div>
                        <div className="col-md-6">
                            <p className='ShotTitle'>{this.state.ShotTitle.ShortTitle2}</p>
                            <h3 className='LongTitle'>{this.state.LongTitle.LongTitle2}</h3>
                            <p className='ShotTitle'>{this.state.ParaGrap.Pragrap2}</p>
                            <p className='ChannelName'>{this.state.ChannelName.ChannelName2}</p>
                            <p className='ShotTitle'>{this.state.dateShort.dateShort2}</p>
                        </div>
                    </div>
                </div>
                {/* part-3 */}
                <div class="carousel-item">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="imgs/blog-1.webp" class="d-block w-100" alt="blog-1.webp" />
                        </div>
                        <div className="col-md-6">
                            <p className='ShotTitle'>{this.state.ShotTitle.ShortTitle3}</p>
                            <h3 className='LongTitle'>{this.state.LongTitle.LongTitle3ShortTitle3}</h3>
                            <p className='ShotTitle'>{this.state.ParaGrap.Pragrap3ShortTitle3}</p>
                            <p className='ChannelName'>{this.state.ChannelName.ChannelName3ShortTitle3}</p>
                            <p className='ShotTitle'>{this.state.dateShort.dateShort3ShortTitle3}</p>
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
        

      </div>
    )
  }
}
export default Carousel