import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { connect } from "react-redux";
import * as propiedadesActions from '../../actions/propiedadesActions';
import Producto from '../Producto/Producto';
import Loader from '../Loader/Loader';
import Error from '../Error/Error'

const Propiedades = (props) => {
    const [desde, setDesde] = useState(0);
    const [limite, setLimite] = useState(6);

    useEffect(() => {
        const {propiedades} = props;
        if(propiedades.length===0){
            props.getPropiedades(desde,limite);
        }
    }, []);

    useEffect(() => {
        const obtenerMas = async()=>{
            return props.getMorePropiedades({desde,limite},props.propiedades);
        }
        if(desde>0){obtenerMas()};
    }, [desde])

    const traerMas = ()=>{
        if(desde==0) return setDesde(limite);
        return setDesde(desde+limite);
    };
    return (
        <div className="row">
            {
                (props.propiedades.length===0 || !props.propiedades)?
                <div className="alert alert-warning text-center col-12">Sin propiedades</div>
                :
                <>
                    {props.propiedades.map(propiedad=>(
                        <div key={propiedad.id} className="col-12 col-md-4 mb-3">
                            <Producto
                                propiedad={propiedad}/>
                        </div>
                    ))}
                    {(props.location && props.location.pathname=='/propiedades')?
                        <div className="text-center w-100 my-3">
                            {(props.errorMasPropiedades)?<Error mensaje={props.errorMasPropiedades}/>:<button onClick={traerMas} className="btn btn-info">{(props.loadingMas)?<Loader/>:'Ver más'}</button>
                            }
                        </div>
                    :null}
                </>
            }
        </div>
    );
}

const mapStateToProps = ({propiedadesReducer})=>propiedadesReducer;
 
export default connect(mapStateToProps,propiedadesActions)(Propiedades);