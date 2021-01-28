import {LOADING,ERROR,OBTENER_PROPIEDADES,VER_PROPIEDAD} from '../types/propiedadesTypes';
import {API} from '../config';

export const getPropiedades = ()=>async(dispatch)=>{
    dispatch({
        type:LOADING
    });
    try {
        const reqPropiedades = await fetch(`${API}/listar_inmuebles/6/normal`);
        const dataPropiedades = await reqPropiedades.json();
        return dispatch({
            type:OBTENER_PROPIEDADES,
            payload:dataPropiedades.data
        })
    } catch (error) {
        dispatch({
            type:ERROR,
            payload:error.message
        })
    }
}

export const getPropiedad = (id)=>async(dispatch)=>{
    dispatch({
        type:LOADING
    });
    try {
        const reqPropiedad = await fetch(`${API}/detallar_inmueble_id/${id}`);
        const dataPropiedad = await reqPropiedad.json();
        if(dataPropiedad.length<1) return dispatch({type:ERROR,payload:'No existe propiedad'});
        return dispatch({
            type:VER_PROPIEDAD,
            payload:dataPropiedad.data[0]
        })
    } catch (error) {
        dispatch({
            type:ERROR,
            payload:error.message
        })
    }
}

export const filtrarPropiedades = (params)=>async (dispatch)=>{
    dispatch({
        type:LOADING
    });
    try {
        let query = `${API}/filtrar_todo/${params.idLocalidad}/${params.idCategoria}/${params.idOperacion}/${params.precio}/${params.moneda}`;
        if(params.minPrecio && params.maxPrecio){
            query += `?minPrecio=${params.minPrecio}&maxPrecio=${params.maxPrecio}`
        }
        const reqPropiedad = await fetch(query);
        const dataPropiedad = await reqPropiedad.json();
        return dispatch({
            type:OBTENER_PROPIEDADES,
            payload:dataPropiedad.data[0]
        })
    } catch (error) {
        dispatch({
            type:ERROR,
            payload:error.message
        })
    }
}