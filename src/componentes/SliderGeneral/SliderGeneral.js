import React from 'react';
import './SliderGeneral.css';

const SliderGeneral = ({seccion}) => {
    return (
        <div className="animated fadeIn fast div-banner">
            <div className="col-12 contenedor-banner">
                <div className="banner">
                    <div className="row ">
                        <div className="col-6">
                            <h2>Angela Sbacco propiedades</h2>
                        </div>
                        <div className="col-6">
                            <h2 className="text-right" id="seccion">{seccion}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SliderGeneral;