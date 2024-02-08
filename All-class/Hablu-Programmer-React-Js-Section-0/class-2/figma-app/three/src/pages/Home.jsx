import React from 'react'
import "./Home.css"
import Header from './Header'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='Home'>
      <Header></Header>
      {/* <!-- banner_part_Start==============================================================  --> */}
      <section class="banner_part">
        <div class="banner_part_silider">
          <div class="banner_silider "></div>
          <div class="banner_silider silider-1"></div>
          <div class="banner_silider silider-2"></div>
          <div class="banner_silider silider-3"></div>
        </div>
        <div class="overlay">
          <h1>We Help brands with high quality services</h1>
          <p>There are many variations of passages of Lorem Ipsum available, but themajority have suffered alteration
            in
            some form, by injected humour, or randomised words which don't look.</p>
          <button class="costum-button">Get Started</button>
        </div>
      </section>
      {/* <!-- banner_part_end==============================================================  --> */}
      {/* <!-- Our Success_part_Start==============================================================  --> */}
      <section id="our_success">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 left">
              <h4>Our Success</h4>
              <h2>West cost Brand makers-Global Edge</h2>
            </div>
            <div class="col-lg-8 right">
              <div class="sustomer_satisfied">
                <h3><span class="counter">200</span>+</h3>
                <p>Customer Satisfied</p>
              </div>
              <div class="sustomer_satisfied">
                <h3><span class="counter">4.5</span></h3>
                <p><span class="counter">200</span>+ Avg rating</p>
              </div>
              <div class="sustomer_satisfied">
                <h3><span class="counter">351</span>+</h3>
                <p>Project Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Our Success_part_end==============================================================  --> */}
      {/* <!-- Our Provided Services_part_Start==============================================================  --> */}
      <section id="our_provided_services">

        <div class="container">
          <div class="title">
            <h2>Our Provided Services</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but themajority have suffered alteration in
              some form.</p>
          </div>

          <div class="row">
            <div class="col-lg-4">
              <div class="service">
                <img src="/assets/imgs/1.service-provider.png" alt="1.service-provider.png"/>
                  <h3>Web Design</h3>
                  <p>There are many variations of passages of Lorem Ipsum available, but themajority have suffered alteration
                    in some form, by injected humour, or randomised words which don't look.</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="service">
                <img src="/assets/imgs/2.service-provider.png" alt="2.service-provider.png"/>
                  <h3>UI/UX Design</h3>
                  <p>There are many variations of passages of Lorem Ipsum available, but themajority have suffered alteration
                    in some form, by injected humour, or randomised words which don't look.</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="service">
                <img src="/assets/imgs/3.service-provider.png" alt="3.service-provider.png"/>
                  <h3>Web Development</h3>
                  <p>There are many variations of passages of Lorem Ipsum available, but themajority have suffered alteration
                    in some form, by injected humour, or randomised words which don't look.</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="service">
                <img src="/assets/imgs/4.service-provider.png" alt="4.service-provider.png"/>
                  <h3>Motion Graphics</h3>
                  <p>There are many variations of passages of Lorem Ipsum available, but themajority have suffered alteration
                    in some form, by injected humour, or randomised words which don't look.</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="service">
                <img src="/assets/imgs/5.service-provider.png" alt="5.service-provider.png"/>
                  <h3>3D Animation</h3>
                  <p>There are many variations of passages of Lorem Ipsum available, but themajority have suffered alteration
                    in some form, by injected humour, or randomised words which don't look.</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="service">
                <img src="/assets/imgs/6.service-provider.png" alt="6.service-provider.png"/>
                  <h3>Digital Marketing</h3>
                  <p>There are many variations of passages of Lorem Ipsum available, but themajority have suffered alteration
                    in some form, by injected humour, or randomised words which don't look.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Our Provided Services_part_end==============================================================  --> */}
      {/* <!-- Our Recent Work_part_Start==============================================================  --> */}
      <section id="our_recent_work">
        <div class="container">
          <div class="title">
            <h2>Our Provided Services</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but themajority have suffered alteration in
              some form.</p>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="recent_work">
                <img src="/assets/imgs/our_recent_work-1.jpg" alt="our_recent_work-1.jpg"/>
                  <div class="work_info">
                    <h3>Task Management App</h3>
                    <p>This is a task management application that can help you be more </p>
                  </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="recent_work">
                <img src="/assets/imgs/our_recent_work-2.jpg" alt="our_recent_work-2.jpg"/>
                  <div class="work_info">
                    <h3>Saas Landing Page Design</h3>
                    <p>This is a task management application that can help you be more </p>
                  </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="recent_work">
                <img src="/assets/imgs/our_recent_work-3.jpg" alt="our_recent_work-3.jpg"/>
                  <div class="work_info">
                    <h3>App Design</h3>
                    <p>This is a task management application that can help you be more </p>
                  </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="recent_work">
                <img src="/assets/imgs/our_recent_work-4.jpg" alt="our_recent_work-1.jpg"/>
                  <div class="work_info">
                    <h3>Landing Page Design</h3>
                    <p>This is a task management application that can help you be more </p>
                  </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="recent_work">
                <img src="/assets/imgs/our_recent_work-5.png" alt="our_recent_work-5.png"/>
                  <div class="work_info">
                    <h3>Dashboard Design</h3>
                    <p>This is a task management application that can help you be more </p>
                  </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="recent_work">
                <img src="/assets/imgs/our_recent_work-6.jpg" alt="our_recent_work-6.jpg"/>
                  <div class="work_info">
                    <h3>Web App Design</h3>
                    <p>This is a task management application that can help you be more </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Our Recent Work_part_end==============================================================  --> */}
      {/* <!-- Why You Should Choose Agenc_part_start ==============================================================  --> */}
      <section id="choose_agenc">
        <div class="container">
          <div class="title">
            <h2>Our Provided Services</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but themajority have suffered alteration in
              some form.</p>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="innovative_ideas">
                <img src="/assets/imgs/innovative.png" alt="innovative.png"/>
                  <h3>innovative.png</h3>
                  <p>Because each project is different, we adapt to your business model.</p>
              </div>
              <div class="innovative_ideas innovative_second">
                <img src="/assets/imgs/deicated.png" alt="innovative.png"/>
                  <h3>Dedicated Support</h3>
                  <p>We provide 24/7 support for all our clients and serve them professionally.</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="innovative_ideas">
                <img src="/assets/imgs/innovative.png" alt="innovative.png"/>
                  <h3>innovative.png</h3>
                  <p>Because each project is different, we adapt to your business model.</p>
              </div>
              <div class="innovative_ideas innovative_second">
                <img src="/assets/imgs/deicated.png" alt="deicated.png"/>
                  <h3>Dedicated Support</h3>
                  <p>We provide 24/7 support for all our clients and serve them professionally.</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="agenc_img">
                <img src="/assets/imgs/agenc.jpg" alt="agenc.jpg"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Why You Should Choose Agenc_part_end==============================================================  --> */}
      {/* <!-- Some Client Reviews_part_start==============================================================  --> */}
      <section id="reviews_part">
        <div class="container">
          <div class="title">
            <h2>Our Provided Services</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but themajority have suffered alteration in
              some form.</p>
          </div>
          <div class="row">
            <div class="clent_reviews_part">
              <div class="reviews">
                <img class="quote" src="/assets/imgs/fontisto_quote-right.png" alt="fontisto_quote-right.png"/>
                  <p class="review_pragrap">I had a good experience while using this app, what fascinated me was the live tracking feature There are
                    many variations of passages of Lorem Ipsum available, but the majority.</p>
                  <ul>
                    <li><i class="fa-regular fa-star"></i></li>
                    <li><i class="fa-regular fa-star"></i></li>
                    <li><i class="fa-regular fa-star"></i></li>
                    <li><i class="fa-regular fa-star"></i></li>
                    <li><i class="fa-regular fa-star"></i></li>
                  </ul>
                  <div class="calient_info">
                    <img src="/assets/imgs/reviews.1.png" alt="reviews.1.png"/>
                      <div class="client_text">
                        <h4>Eric Drake</h4>
                        <p>Digital Marketor</p>
                      </div>
                  </div>
              </div>
              <div class="reviews">
                <img class="quote" src="/assets/imgs/fontisto_quote-right.png" alt="fontisto_quote-right.png"/>
                  <p class="review_pragrap">I had a good experience while using this app, what fascinated me was the live tracking feature There are
                    many variations of passages of Lorem Ipsum available, but the majority.</p>
                  <ul>
                    <li><i class="fa-regular fa-star"></i></li>
                    <li><i class="fa-regular fa-star"></i></li>
                    <li><i class="fa-regular fa-star"></i></li>
                    <li><i class="fa-regular fa-star"></i></li>
                    <li><i class="fa-regular fa-star"></i></li>
                  </ul>
                  <div class="calient_info">
                    <img src="/assets/imgs/reviews.1.png" alt="reviews.1.png"/>
                      <div class="client_text">
                        <h4>Eric Drake</h4>
                        <p>Digital Marketor</p>
                      </div>
                  </div>
              </div>
              <div class="reviews">
                <img class="quote" src="/assets/imgs/fontisto_quote-right.png" alt="fontisto_quote-right.png"/>
                  <p class="review_pragrap">I had a good experience while using this app, what fascinated me was the live tracking feature There are
                    many variations of passages of Lorem Ipsum available, but the majority.</p>
                  <ul>
                    <li><i class="fa-regular fa-star"></i></li>
                    <li><i class="fa-regular fa-star"></i></li>
                    <li><i class="fa-regular fa-star"></i></li>
                    <li><i class="fa-regular fa-star"></i></li>
                    <li><i class="fa-regular fa-star"></i></li>
                  </ul>
                  <div class="calient_info">
                    <img src="/assets/imgs/reviews.2.png" alt="reviews.2.png"/>
                      <div class="client_text">
                        <h4>Rosa Farmer</h4>
                        <p>UI Designerr</p>
                      </div>
                  </div>
              </div>
              <div class="reviews">
                <img class="quote" src="/assets/imgs/fontisto_quote-right.png" alt="fontisto_quote-right.png"/>
                  <p class="review_pragrap">I had a good experience while using this app, what fascinated me was the live tracking feature There are
                    many variations of passages of Lorem Ipsum available, but the majority.</p>
                  <ul>
                    <li><i class="fa-regular fa-star"></i></li>
                    <li><i class="fa-regular fa-star"></i></li>
                    <li><i class="fa-regular fa-star"></i></li>
                    <li><i class="fa-regular fa-star"></i></li>
                    <li><i class="fa-regular fa-star"></i></li>
                  </ul>
                  <div class="calient_info">
                    <img src="/assets/imgs/reviews.2.png" alt="reviews.2.png"/>
                      <div class="client_text">
                        <h4>Rosa Farmer</h4>
                        <p>UI Designerr</p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Some Client Reviews_part_end==============================================================  --> */}
      {/* <!-- We Do design, Code & Development_part_start==============================================================  --> */}
      <section id="development_part">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 left_part">
              <h2>We Do design, Code & Development</h2>
              <p>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
              <p class="development_left_pragrap">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
            </div>
            <div class="col-lg-6 right_part">
              <h3>Get a free quote now</h3>
              <div>
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
              </div>
              <div>
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email"/>
              </div>
              <div>
                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter your phone number"/>
              </div>
              <button class="costum-button">Get Pricing Now</button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- We Do design, Code & Development_part_end==============================================================  --> */}
      {/* <!-- footer_part_start==============================================================  --> */}
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-lg-4 footer_logo">
              <img src="/assets/imgs/logo.png" alt="logo.png"/>
                <p>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
            </div>
            <div class="col-lg-2 footer_info">
              <h4>About</h4>
              <a href="#">About Us</a>
              <a href="#">Features</a>
              <a href="#">News</a>
              <a href="#">Careers</a>
            </div>
            <div class="col-lg-2 footer_info">
              <h4>Company</h4>
              <a href="#">Our Team</a>
              <a href="#">Partner With Us</a>
              <a href="#">FAQ</a>
              <a href="#">Blog</a>
            </div>
            <div class="col-lg-2 footer_info">
              <h4>Support</h4>
              <a href="#">About</a>
              <a href="#">Support Center</a>
              <a href="#">Feedback</a>
              <a href="#">Contact Us</a>
              <a href="#">Accesbility</a>
            </div>
            <div class="col-lg-2 footer_info">
              <h4>Get in touch</h4>
              <a href="#">info@gmail.com</a>
              <a href="#">+88 0121 0212</a>
            </div>
          </div>
          <hr/>
            <p class="copy_right">All credit goes to @agence.com</p>
        </div>
      </footer>
      {/* <!-- footer_part_end==============================================================  --> */}



      <section id="socile_part">
        <ul>
          <li><a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a></li>
          <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
          <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
          <li><a href="https://www.youtube.com/"><i class="fa-brands fa-youtube"></i></a></li>
        </ul>
      </section>
    </div>
  )
}

export default Home
