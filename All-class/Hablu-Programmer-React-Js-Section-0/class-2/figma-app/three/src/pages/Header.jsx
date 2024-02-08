import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='Navebar'>
              {/* <!-- navbar_part_start==============================================================  --> */}
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="#"><img src="/assets/imgs/logo.png" alt="logo.png"/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><Link to={"/"}>Home</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><Link to={"/About"}>About</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><Link to={"/Contact"}>Contact</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"> Careers </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <form>
              <button class="costum-button">Search</button>
            </form>
          </div>
        </div>
      </nav>
      {/* <!-- navbar_part_end==============================================================  --> */}
    </div>
  )
}

export default Header
