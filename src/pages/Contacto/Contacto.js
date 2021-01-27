import React,{Fragment, useEffect} from 'react';
import SliderGeneral from '../../componentes/SliderGeneral/SliderGeneral';
import FormContacto from '../../componentes/FormContacto/FormContacto';
import {API} from '../../config';

import './Contacto.css';
const Contacto = () => {
    const [contacto, setContacto] = React.useState(undefined);
    useEffect(() => {
        fetch(`${API}/contacto`).then(res=>res.json()).then(data=>{
            setContacto(data.data[0]);
        })
    }, [])
    return (
        (!contacto)?null:
        <Fragment>
            <SliderGeneral seccion="Contacto"/>
            <div className="container contenedor-contacto">
                <FormContacto/>
                <div className="row mt-4">
                    <div className="col-6 col-md-4 text-center">
                        <i className="icon-red fab fa-facebook"></i><span className="redNombre"> <a target="blank" style={{color:'black'}} href={`${contacto.facebook}`}>Angela Sbacco Propiedades</a></span>
                    </div>
                    <div className="col-6 col-md-4 text-center">
                        <i className="icon-red fab fa-instagram"></i><span className="redNombre"> <a target="blank" style={{color:'black'}} href={`${contacto.instagram}`}>Angela Sbacco Propiedades</a></span>
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <i className="icon-red fas fa-envelope"></i><span className="redNombre" id="email"> info@asbaccopropiedades.com</span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Contacto;