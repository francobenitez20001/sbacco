import React,{Fragment,useEffect} from 'react';
import { useParams } from "react-router-dom";
import SliderGeneral from '../../componentes/SliderGeneral/SliderGeneral';
import FormContacto from '../../componentes/FormContacto/FormContacto';
import {connect} from 'react-redux';
import * as propiedadesActions from '../../actions/propiedadesActions';
import LoaderFullWidth from '../../componentes/Loader/LoaderFullWidth';
import './PropiedadDetalle.css';
import CarouselProductos from '../../componentes/CarouselProductos';
import CardDescripcion from '../../componentes/CardDescripcionPropiedad/cardDescripcion';
import CardServicios from '../../componentes/CardDescripcionPropiedad/cardServicios';

const PropiedadDetalle = (props) => {
    // console.log(id);
    let { id } = useParams();
    
    useEffect(() => {
        props.getPropiedad(id);
    }, [])

    const handleClickImagenIndividual = event =>{
        document.getElementsByName('img-modal')[0].src = event.target.src
    }

    const {data:propiedad,imagenes} = props.propiedad;
    return (
        (props.loading || !propiedad || !imagenes)?<LoaderFullWidth/>:
        <Fragment>
            <SliderGeneral seccion="Propiedad en detalle"/>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 col-md-10">
                        <CarouselProductos imagenes={imagenes}/>
                    </div>
                    <div className="col-12 col-md-2 muestraImagenes">
                        {imagenes.map(img=>(
                            <img key={img.id} onClick={handleClickImagenIndividual} data-toggle="modal" data-target=".bd-example-modal-lg" src={`${img.nombre}`} className="img-fluid mb-2" alt="casa"/>
                        ))}
                    </div>
                </div>


                {/* descripcion */}
                
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 col-md-8 cont-caja">
                                <CardDescripcion propiedad={propiedad}/>
                            </div>
                            <div className="col-12 col-md-4 cont-caja">
                                <CardServicios propiedad={propiedad}/>
                            </div>
                        </div>
                    </div>
                </div>
                <FormContacto titulo="Consultar por esta propiedad"/>
            </div>

            <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <img src="" name="img-modal" className="img-fluid" alt="casa"/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
const mapStateToProps = ({propiedadesReducer})=>propiedadesReducer;

export default connect(mapStateToProps,propiedadesActions)(PropiedadDetalle);
