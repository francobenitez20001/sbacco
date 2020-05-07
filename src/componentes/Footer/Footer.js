import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-4 mt-1">
                            <img src="http://104.197.241.81:4200/assets/img/logo.png" alt="logo" className="logo-footer img-fluid"/>
                        </div>
                        <div className="col-12 col-md-4 text-center mt-4">
                            <i className=" ml-4 mr-2 fa fa-phone-alt icon-footer material-icons mt-3"></i>
                            <p className="info-footer mt-2">011-15-5010-5559</p>
                        </div>
                        <div className="col-12 col-md-4 text-center mt-4">
                            <i className="fas fa-map-marker-alt material-icons icon-footer mt-3"></i>
                            <p className="info-footer mt-2">Ruta Provincial 192 y Calle 25 de Mayo, Parada Robles</p>
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