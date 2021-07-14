import React from 'react';
import {connect} from 'react-redux';
import './Footer.css';

const Footer = (props) => {
    const {info} = props;
    return (
        !info ? null :
        <div className="contenedor-footer">
            <div className="footer">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-4 mt-1">
                            <img src="/logo.png" alt="logo" className="logo-footer img-fluid"/>
                        </div>
                        <div className="col-12 col-md-4 text-center">
                            <i className="fa fa-phone-alt icon-footer material-icons mt-3"></i>
                            <p className="info-footer mt-2">{info.telefonoPrincipal}</p>
                        </div>
                        <div className="col-12 col-md-4 text-center">
                            <i className="fas fa-map-marker-alt material-icons icon-footer mt-3"></i>
                            <p className="info-footer mt-2">{info.direccion}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="col-12 text-center">
                    <p className="info-footer">© copyright {new Date().getFullYear()} - Todos los derechos reservados - Design By Franco Benitez & Roberto Alvarez</p>
                </div>
            </div>
        </div>
    );
}
 
const mapStateToProps = ({contactoReducer})=>contactoReducer;
 
export default connect(mapStateToProps,{})(Footer);
