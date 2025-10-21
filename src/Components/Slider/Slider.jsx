import React from 'react'
import "./Slider.css"
import Slider1 from '../../images/Slider1.jpeg'
import Slider2 from '../../images/Slider2.jpg'
import Slider3 from '../../images/Slider3.jpg'
export default function Slider() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Slider1} class="d-block w-100" alt="Slider1"/>
            <div class="carousel-caption d-none d-md-block">
              <h2 className=" fw-bold mb-4">Autumn-Winter 2024</h2>
            <p className="lead mb-4">Create your trends and life ages!</p>
            <button className="btn btn-light btn-lg px-5 py-3">
              SHOP NOW
            </button>
            </div>
            </div>
          <div class="carousel-item">
            <img src={Slider2} class="d-block w-100" alt="Slider2"/>
            <div class="carousel-caption d-none d-md-block">
              <h2 className=" fw-bold mb-4">Autumn-Winter 2024</h2>
            <p className="lead mb-4">Create your trends and life ages!</p>
            <button className="btn btn-light btn-lg px-5 py-3">
              SHOP NOW
            </button>
            </div>
          </div>
          <div class="carousel-item">
            <img src={Slider3} class="d-block w-100" alt="Slider3"/>
            <div class="carousel-caption d-none d-md-block">
              <h2 className="fw-bold mb-4">Autumn-Winter 2024</h2>
            <p className="lead mb-4">Create your trends and life ages!</p>
            <button className="btn btn-light btn-lg px-5 py-3">
              SHOP NOW
            </button>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
