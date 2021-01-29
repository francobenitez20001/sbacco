import React from 'react';
import './SliderGeneral.css';

const SliderGeneral = ({seccion}) => {
    return (
        <div className="animated fadeIn fast contenedor-banner">
            <div className="container">
                <h2>Angela Sbacco propiedades</h2>
                <h2 className="paginacion">{seccion}</h2>
            </div>
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
    );
}
 
export default SliderGeneral;