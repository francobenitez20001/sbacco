import React,{Fragment, useEffect} from 'react';
import SliderGeneral from '../../componentes/SliderGeneral/SliderGeneral';
import FormContacto from '../../componentes/FormContacto/FormContacto';
import {connect} from 'react-redux';
import * as contactoActions from '../../actions/contactoActions';
import Footer from '../../componentes/Footer/Footer';
import Mapa from '../../componentes/Mapa/Mapa'
import './Contacto.css';
import CardInfoContacto from '../../componentes/CardInfoContacto';
import {scrollToTop} from '../../helpers/index';

const Contacto = (props) => {
    useEffect(() => {
        if(!props.info){
            props.getInfo();
        }
        scrollToTop();
    }, [])
    return (
        (!props.info)?null:
        <Fragment>
            <SliderGeneral seccion="Contacto"/>
            <div className="container py-3">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <FormContacto/>
                    </div>
                    <div className="col-12 col-md-4">
                        <CardInfoContacto/>
                    </div>
                </div>
            </div>
            <div className="container">
                <Mapa/>
            </div>
            <Footer/>
        </Fragment>
    );
}
 
const mapStateToProps = ({contactoReducer})=>contactoReducer;
 
export default connect(mapStateToProps,contactoActions)(Contacto);