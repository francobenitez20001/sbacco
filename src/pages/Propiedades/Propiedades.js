import React, {Fragment, useEffect} from 'react';
import SliderGeneral from '../../componentes/SliderGeneral/SliderGeneral';
import Filtro from '../../componentes/Filtro/Filtro';
import Footer from '../../componentes/Footer/Footer';
import Propiedades from '../../componentes/Propiedades/index';
import {scrollToTop} from '../../helpers/index'
import './Propiedades.css';

const PropiedadesPage = (props) => {
    useEffect(() => {
        scrollToTop();
    }, [])
    return (
        <Fragment>
            <SliderGeneral seccion="Propiedades"/>
            <div className="container my-3">
                <Propiedades location={props.location}/>
            </div>
            <Filtro/>
            <Footer/>
        </Fragment>
    );
}
 
export default PropiedadesPage;