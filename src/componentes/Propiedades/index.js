import React,{useEffect} from 'react';
import { connect } from "react-redux";
import * as propiedadesActions from '../../actions/propiedadesActions';
import Producto from '../Producto/Producto';
import Loader from '../Loader/Loader';
import Swal from 'sweetalert2';
import './index.css';
import { useHistory } from 'react-router-dom';

const Propiedades = (props) => {
    
    const {propiedades,loading,loadingMas,error,errorMasPropiedades,filtrando,filtros,desde,cantidad,filtrarPropiedades,getPropiedades,getMorePropiedades,updatePagination,restablecerFiltros} = props;
    const {location:{pathname}} = useHistory();

    useEffect(() => {
        console.log(pathname);
        if(filtrando && pathname === '/propiedades'){
            console.log('aca');
            filtrarPropiedades();
        }else{
            if(filtrando){
                restablecerFiltros();
            }else{
                getPropiedades();
            }
        }
    }, [filtrando,filtros]);

    useEffect(() => {
        if(desde>0){
            getMorePropiedades();
        }
    }, [desde]);

    
    if(!propiedades.length && filtrando){
        Swal.fire('Atención','No se encontraron propiedades','warning').then(()=>window.location.assign('/propiedades'));
    }

    return (
        <div className="row">
            <div className="col-12 my-2">
                {filtrando &&  pathname === '/propiedades' ? <button onClick={()=>restablecerFiltros()} className="btn" id="btn-restablecerFiltros">Restablecer Filtros <i className="fas fa-times"></i></button> : null}
            </div>
            {loading ? <div className="col-12 my-2"><Loader/></div> : propiedades.map(propiedad=>(
                <div key={propiedad.id} className="col-12 col-md-4 mb-3">
                    <Producto
                        propiedad={propiedad}/>
                </div>
            ))}
            {propiedades.length<cantidad || !props.btnVerMas ? null : 
            <div className="text-center w-100">
                <button onClick={()=>updatePagination()} className="btn btn-info">{(loadingMas)?<Loader/>:'Ver más'}</button>
            </div>}
        </div>
    );
}

const mapStateToProps = ({propiedadesReducer})=>propiedadesReducer;
 
export default connect(mapStateToProps,propiedadesActions)(Propiedades);