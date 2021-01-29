import React, {Fragment} from 'react';
import SliderGeneral from '../../componentes/SliderGeneral/SliderGeneral';
import Filtro from '../../componentes/Filtro/Filtro';
import Footer from '../../componentes/Footer/Footer';
import Propiedades from '../../componentes/Propiedades/index';
import './Propiedades.css';

const PropiedadesPage = () => {
    return (
        <Fragment>
            <SliderGeneral seccion="Propiedades"/>
            <div className="container">
                <Propiedades/>
            </div>
            <Filtro/>
            <Footer/>
        </Fragment>
    );
}
 
export default PropiedadesPage;