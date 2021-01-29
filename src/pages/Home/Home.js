import React,{useEffect} from 'react';
import '../../App.css';
import {connect} from 'react-redux';
import * as propiedadesActions from '../../actions/propiedadesActions.js';
import * as categoriasActions from '../../actions/categoriasActions.js';
import * as ubicacionesActions from '../../actions/ubicacionesActions.js';
import * as operacionesActions from '../../actions/operacionesActions.js';
import Slider from '../../componentes/Slider/Slider';
import Filtro from '../../componentes/Filtro/Filtro';
import FormContacto from '../../componentes/FormContacto/FormContacto';
import Mapa from '../../componentes/Mapa/Mapa';
import LoaderFullWidth from '../../componentes/Loader/LoaderFullWidth';
import Footer from '../../componentes/Footer/Footer';
import Propiedades from '../../componentes/Propiedades';

const {getCategorias} = categoriasActions;
const {getOperaciones} = operacionesActions;
const {getPropiedades} = propiedadesActions;
const {getUbicaciones} = ubicacionesActions;

const Home = (props) => {
    const {categorias} = props.categoriasReducer;
    const {operaciones} = props.operacionesReducer;
    const {propiedades} = props.propiedadesReducer;
    const {ubicaciones} = props.ubicacionesReducer;

    useEffect(() => {
        if(categorias.length==0){
            props.getCategorias();
        }
        if(operaciones.length==0){
            props.getOperaciones();
        }
        if(propiedades.length==0){
            props.getPropiedades();
        }
        if(ubicaciones.length==0){
            props.getUbicaciones();
        }
    }, [])

    return (
        (categorias.length==0 || operaciones.length==0 || ubicaciones.length == 0)?<LoaderFullWidth/>:
        <div className="App">
            <Slider/>
            <Filtro/>
            <div className="container">
                <h2 id="tituloPropiedadesSeccion" className="mb-4">Últimas <span>Propiedades</span></h2>
                <Propiedades/>
            </div>
            <hr/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-7">
                    <Mapa/>
                    </div>
                    <div className="col-12 col-md-5">
                    <FormContacto/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

const mapStateToProps = ({categoriasReducer,operacionesReducer,propiedadesReducer,ubicacionesReducer})=>{
    return {categoriasReducer,operacionesReducer,propiedadesReducer,ubicacionesReducer}
};

const mapDispatchToProps = {
    getCategorias,
    getOperaciones,
    getPropiedades,
    getUbicaciones
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);