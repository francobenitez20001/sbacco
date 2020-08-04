import React, { useState, useEffect } from 'react';
import {API} from '../../config';
import './Footer.css';

const Footer = () => {
    const [contacto, setContacto] = useState(undefined);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getContacto();
    }, [])
    const getContacto = async()=>{
        return fetch(`${API}/contacto`).then(res=>res.json()).then(data=>{
            setContacto(data.data[0]);
            setLoading(false);
        });
    }
    return (
        (loading)?null:
        <div className="contenedor-footer">
            <div className="footer">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-4 mt-1">
                            <img src="http://104.197.241.81/imagenes/logo.png" alt="logo" className="logo-footer img-fluid"/>
                        </div>
                        <div className="col-12 col-md-4 text-center">
                            <i className="fa fa-phone-alt icon-footer material-icons mt-3"></i>
                            <p className="info-footer mt-2">{contacto.telefonoPrincipal}</p>
                        </div>
                        <div className="col-12 col-md-4 text-center">
                            <i className="fas fa-map-marker-alt material-icons icon-footer mt-3"></i>
                            <p className="info-footer mt-2">{contacto.direccion}</p>
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
 
export default Footer;