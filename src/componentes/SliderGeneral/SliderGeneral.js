import React from 'react';
import './SliderGeneral.css';

const SliderGeneral = ({seccion}) => {
    return (
        <>
            <div className="animated fadeIn fast contenedor-banner">
                {/* <div className="contenedor-banner">
                    <div className="container">
                    <div className="row">
                    <div className="col-6">
                    <h2>Angela Sbacco propiedades</h2>
                    </div>
                    <div className="col-6">
                    <h2 className="text-right" id="seccion">{seccion}</h2>
                    </div>
                    </div>
                    </div>
                </div> */}
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