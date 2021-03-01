import {LOADING,ERROR,OBTENER_PROPIEDADES,VER_PROPIEDAD,LOADING_MAS, ERROR_MAS_PROPIEDADES} from '../types/propiedadesTypes';
import {API} from '../config';

export const getPropiedades = (desde=0,limit=6)=>async(dispatch)=>{
    dispatch({
        type:LOADING
    });
    try {
        const reqPropiedades = await fetch(`${API}/listar_inmuebles/${limit}/normal?desde=${desde}`);
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

export const getMorePropiedades = (rangoProductos,prevProductos)=>async (dispatch)=>{
    dispatch({
        type:LOADING_MAS
    });
    try {
        let url = `${API}/listar_inmuebles/${rangoProductos.limite}/normal?desde=${rangoProductos.desde}`;
        return fetch(url).then(res=>res.json()).then(data=>{
            if(data.data.length==0){
                return dispatch({
                    type:ERROR_MAS_PROPIEDADES,
                    payload:'No se encontraron mas propiedades'
                })
            }
            let updateproductos = [...prevProductos,...data.data];
            dispatch({
                type:OBTENER_PROPIEDADES,
                payload:updateproductos
            });
        })
    } catch (error) {
        dispatch({
            type:ERROR,
            payload:error
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
        if(dataPropiedad.data.length<1) return dispatch({type:ERROR,payload:'No existe propiedad'});
        return dispatch({
            type:VER_PROPIEDAD,
            payload:dataPropiedad
        })
    } catch (error) {
        dispatch({
            type:ERROR,
            payload:error.message
        })
    }
}

export const filtrarPropiedades = (params,rangoPrecio)=>async (dispatch)=>{
    dispatch({
        type:LOADING
    });
    try {
        let query = `${API}/filtrar_todo/${params.idLocalidad}/${params.idBarrio}/${params.idCategoria}/${params.idOperacion}/${params.precio}/${params.moneda}`;
        if(rangoPrecio){
            query += `?minPrecio=${rangoPrecio.minPrecio}&maxPrecio=${rangoPrecio.maxPrecio}`
        }
        const reqPropiedad = await fetch(query);
        const dataPropiedad = await reqPropiedad.json();
        if(!dataPropiedad.status){
            return dispatch({
                type:ERROR,
                payload:dataPropiedad.info.code
            })
        }
        return dispatch({
            type:OBTENER_PROPIEDADES,
            payload:dataPropiedad.data
        })
    } catch (error) {
        dispatch({
            type:ERROR,
            payload:error.message
        })
    }
}