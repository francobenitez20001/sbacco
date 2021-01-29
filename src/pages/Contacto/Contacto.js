import React,{Fragment, useEffect} from 'react';
import SliderGeneral from '../../componentes/SliderGeneral/SliderGeneral';
import FormContacto from '../../componentes/FormContacto/FormContacto';
import {connect} from 'react-redux';
import * as contactoActions from '../../actions/contactoActions';
import './Contacto.css';

const Contacto = (props) => {
    useEffect(() => {
        if(!props.info){
            props.getInfo();
        }
    }, [])
    return (
        (!props.info)?null:
        <Fragment>
            <SliderGeneral seccion="Contacto"/>
            <div className="container contenedor-contacto">
                <FormContacto/>
                <div className="row mt-4">
                    <div className="col-6 col-md-4 text-center">
                        <i className="icon-red fab fa-facebook"></i><span className="redNombre"> <a target="blank" style={{color:'black'}} href={`${props.info.facebook}`}>Angela Sbacco Propiedades</a></span>
                    </div>
                    <div className="col-6 col-md-4 text-center">
                        <i className="icon-red fab fa-instagram"></i><span className="redNombre"> <a target="blank" style={{color:'black'}} href={`${props.info.instagram}`}>Angela Sbacco Propiedades</a></span>
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <i className="icon-red fas fa-envelope"></i><span className="redNombre" id="email"> info@asbaccopropiedades.com</span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
const mapStateToProps = ({contactoReducer})=>contactoReducer;
 
export default connect(mapStateToProps,contactoActions)(Contacto);