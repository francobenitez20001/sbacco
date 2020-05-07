import React, {Fragment} from 'react';
import './Mapa.css';

const Mapa = () => {
    return (
        <Fragment>
            <p className="text-left" id="tituloPropiedadesSeccionn">Oficina central en <span>Parada Robles</span></p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d823.2438110277564!2d-59.123266170764104!3d-34.37654989190871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDIyJzM1LjYiUyA1OcKwMDcnMjEuOCJX!5e0!3m2!1sen!2sar!4v1581183854035!5m2!1sen!2sar" width="100%" height="400" ></iframe>
        </Fragment>
    );
}
 
export default Mapa;