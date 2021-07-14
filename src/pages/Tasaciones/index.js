import React, { Fragment, useEffect } from 'react';
import FormTasacion from '../../componentes/FormTasacion/formTasacion';
import SliderGeneral from '../../componentes/SliderGeneral/SliderGeneral';
import Footer from '../../componentes/Footer/Footer';
import {connect} from 'react-redux';
import LoaderFullWidth from '../../componentes/Loader/LoaderFullWidth';
import { scrollToTop } from '../../helpers/index';

const Tasaciones = (props) => {
    const {info} = props;
    
    useEffect(() => {
        scrollToTop();
    }, []);
    
    return (
        !info ? <LoaderFullWidth/> :
        <Fragment>
            <SliderGeneral seccion="Tasaciones"/>
            <div className="container py-4">
                <h4>Tasaciones</h4> 
                <span className="text-muted">Completá el formulario para que podamos llevar a cabo una tasación de tu propiedad.</span>
                <br/>
                <FormTasacion/>
            </div>
            <Footer/>
            <style jsx>{`
                h4{
                    fontSize:24px;
                    color:#83014b;
                }    
            `}</style>
        </Fragment>
    );
}

const mapStateToProps = ({contactoReducer}) => contactoReducer; 

export default connect(mapStateToProps,{})(Tasaciones);