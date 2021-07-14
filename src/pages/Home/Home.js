import React,{useEffect, useState} from 'react';
import {connect} from 'react-redux';
import * as categoriasActions from '../../actions/categoriasActions.js';
import * as ubicacionesActions from '../../actions/ubicacionesActions.js';
import * as operacionesActions from '../../actions/operacionesActions.js';
import Slider from '../../componentes/Slider/Slider';
import Filtro from '../../componentes/Filtro/Filtro';
import Mapa from '../../componentes/Mapa/Mapa';
import LoaderFullWidth from '../../componentes/Loader/LoaderFullWidth';
import Footer from '../../componentes/Footer/Footer';
import Propiedades from '../../componentes/Propiedades';
import {scrollToTop} from '../../helpers/index';
import '../../App.css';

const {getCategorias} = categoriasActions;
const {getOperaciones} = operacionesActions;
const {getUbicaciones} = ubicacionesActions;

const Home = (props) => {
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
        <div className="App">
            <Slider/>
            <Filtro/>
            <div className="container">
                <h2 id="tituloPropiedadesSeccion" className="mb-4">Últimas <span>Propiedades</span></h2>
                <Propiedades btnVerMas={false}/>
            </div>
            <hr/>
            <div className="container">
                <Mapa/>
            </div>
            <Footer/>
        </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Home);