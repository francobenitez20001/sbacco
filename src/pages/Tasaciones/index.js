import React, { Fragment } from 'react';
import FormTasacion from '../../componentes/FormTasacion/formTasacion';
import SliderGeneral from '../../componentes/SliderGeneral/SliderGeneral';
import Footer from '../../componentes/Footer/Footer';
const Tasaciones = () => {
    return (
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
 
export default Tasaciones;