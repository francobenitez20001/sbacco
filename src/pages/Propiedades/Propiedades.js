import React, {Fragment, useEffect, useState} from 'react';
import SliderGeneral from '../../componentes/SliderGeneral/SliderGeneral';
import Filtro from '../../componentes/Filtro/Filtro';
import Footer from '../../componentes/Footer/Footer';
import Propiedades from '../../componentes/Propiedades/index';
import {scrollToTop} from '../../helpers/index';
import {connect} from 'react-redux';
import * as categoriasActions from '../../actions/categoriasActions.js';
import * as ubicacionesActions from '../../actions/ubicacionesActions.js';
import * as operacionesActions from '../../actions/operacionesActions.js';
import './Propiedades.css';
import LoaderFullWidth from '../../componentes/Loader/LoaderFullWidth';

const {getCategorias} = categoriasActions;
const {getOperaciones} = operacionesActions;
const {getUbicaciones} = ubicacionesActions;

const PropiedadesPage = (props) => {
    const [loadAllData, setLoadAllData] = useState(false);
    const {categoriasReducer:{categorias},operacionesReducer:{operaciones},ubicacionesReducer:{ubicaciones},getCategorias,getOperaciones,getUbicaciones} = props;

    useEffect(() => {
        scrollToTop();
        getData();
    }, []);
    
    const getData = async () => {
        if(!categorias.length){
            await getCategorias();
        }
        if(!operaciones.length){
            await getOperaciones();
        }
        if(!ubicaciones.length){
            await getUbicaciones();
        }
        setLoadAllData(true);
    }

    return (
        !loadAllData ? <LoaderFullWidth/> :
        <Fragment>
            <SliderGeneral seccion="Propiedades"/>
            <div className="container my-3">
                <Propiedades btnVerMas={true}/>
            </div>
            <Filtro/>
            <Footer/>
        </Fragment>
    );
}
const mapStateToProps = ({categoriasReducer,operacionesReducer,ubicacionesReducer})=>{
    return {categoriasReducer,operacionesReducer,ubicacionesReducer}
};

const mapDispatchToProps = {
    getCategorias,
    getOperaciones,
    getUbicaciones
}
export default connect(mapStateToProps,mapDispatchToProps)(PropiedadesPage);