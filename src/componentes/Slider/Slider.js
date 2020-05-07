import React from 'react';
import './Slider.css';

const Slider = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide animated fadeIn fast" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="http://104.197.241.81:4200/assets/img/banner/campo-2.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Angela Sbacco</h2>
                        <h3>Propiedades</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="http://104.197.241.81:4200/assets/img/banner/campo-3.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Angela Sbacco</h2>
                        <h3>Propiedades</h3>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}
 
export default Slider;