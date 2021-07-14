import React from 'react';
import './SliderGeneral.css';

const SliderGeneral = ({seccion}) => {
    return (
        <>
            <div className="animated fadeIn fast contenedor-banner">
            </div>
            <div className="info-contenedor">
                <div className="container d-flex align-items-center justify-content-between">
                    <h2>Angela Sbacco propiedades</h2>
                    <h2 className="paginacion">{seccion}</h2>
                </div>
            </div>
        </>
    );
}
 
export default SliderGeneral;