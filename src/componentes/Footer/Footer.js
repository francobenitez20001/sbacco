import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import * as contactoActions from '../../actions/contactoActions';
import './Footer.css';

const Footer = (props) => {
    useEffect(() => {
        if(!props.info){
            props.getInfo();
        }
    }, [])
    return (
        (!props.info)?null:
        <div className="contenedor-footer">
            <div className="footer">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-4 mt-1">
                            <img src="http://104.197.241.81/imagenes/logo.png" alt="logo" className="logo-footer img-fluid"/>
                        </div>
                        <div className="col-12 col-md-4 text-center">
                            <i className="fa fa-phone-alt icon-footer material-icons mt-3"></i>
                            <p className="info-footer mt-2">{props.info.telefonoPrincipal}</p>
                        </div>
                        <div className="col-12 col-md-4 text-center">
                            <i className="fas fa-map-marker-alt material-icons icon-footer mt-3"></i>
                            <p className="info-footer mt-2">{props.info.direccion}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="col-12 text-center">
                    <p className="info-footer">© copyright 2020 - Todos los derechos reservados - Design By Franco Benitez & Roberto Alvarez</p>
                </div>
            </div>
        </div>
    );
}
 
const mapStateToProps = ({contactoReducer})=>contactoReducer;
 
export default connect(mapStateToProps,contactoActions)(Footer);