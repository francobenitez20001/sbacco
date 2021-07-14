import React, {Fragment,useEffect} from 'react';
import SliderGeneral from '../../componentes/SliderGeneral/SliderGeneral';
import Mapa from '../../componentes/Mapa/Mapa';
import LoaderFullWidth from '../../componentes/Loader/LoaderFullWidth';
import { connect } from "react-redux";
import * as nosotrosActions from '../../actions/nosotrosActions';
import Footer from '../../componentes/Footer/Footer';
import {scrollToTop} from '../../helpers/index';
import './Nosotros.css';

const Nosotros = (props) => {

    useEffect(() => {
        getData();
        scrollToTop();
    }, [])

    const getData = ()=>{
        if(!props.info){
            props.getInfo();
        }
    }

    return (
        !props.info ?<LoaderFullWidth/> :
        <Fragment>
            <SliderGeneral seccion="Nosotros"/>
            <div className="container animated fadeIn fast mt-4">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <p id="tituloPropiedadesSeccionNosotros">Quiénes sómos</p>
                        <div className="col-12 subrayado-animado"></div>
                        <p className="descripcion text-justify mt-4" style={{whiteSpace:'pre-line'}}>
                            {props.info.contenido}
                        </p>
                    </div>
                    <div className="col-12 col-md-6">
                        <Mapa/>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
    );
}

const mapStateToProps = ({nosotrosReducer})=>nosotrosReducer;
export default connect(mapStateToProps,nosotrosActions)(Nosotros);