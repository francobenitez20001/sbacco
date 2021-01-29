import React from 'react';
const CarouselProductos = ({imagenes}) => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide carousel-propiedad" data-ride="carousel">
            <ol className="carousel-indicators">
                {imagenes.map(img=>(
                    (img.header === 1) ? 
                        <li key={img.id} data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    :
                    <li key={img.id} data-target="#carouselExampleIndicators" data-slide-to={img.id + 1}></li>
                ))}
            </ol>
            <div className="carousel-inner">
                {imagenes.map(img=>(
                    (img.header === 1) ? 
                        <div key={img.id} className="carousel-item active">
                            <img className="" src={`${img.nombre}`} alt="First slide"/>
                        </div>
                    :
                        <div key={img.id} className="carousel-item">
                            <img className="" src={`${img.nombre}`} alt="Second slide"/>
                        </div>
                ))}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}
 
export default CarouselProductos;