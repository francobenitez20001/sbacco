import {LOADING,ERROR,OBTENER_PROPIEDADES,VER_PROPIEDAD,LOADING_MAS, ERROR_MAS_PROPIEDADES} from '../types/propiedadesTypes';
import {API} from '../config';

export const getPropiedades = (desde=0,limit=6)=>async(dispatch)=>{
    dispatch({
        type:LOADING
    });
    try {
        const reqPropiedades = await fetch(`${API}/inmuebles?cantidad=${limit}&desde=${desde}&order=normal`);
        const dataPropiedades = await reqPropiedades.json();
        return dispatch({
            type:OBTENER_PROPIEDADES,
            payload:dataPropiedades.inmuebles
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
        let url = `${API}/inmuebles?cantidad=${rangoProductos.limite}&order=normal&desde=${rangoProductos.desde}`;
        return fetch(url).then(res=>res.json()).then(data=>{
            if(data.inmuebles.length==0){
                return dispatch({
                    type:ERROR_MAS_PROPIEDADES,
                    payload:'No se encontraron mas propiedades'
                })
            }
            let updateproductos = [...prevProductos,...data.inmuebles];
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
        const reqPropiedad = await fetch(`${API}/inmuebles/${id}`);
        const dataPropiedad = await reqPropiedad.json();
        if(dataPropiedad.inmueble.length==0) return dispatch({type:ERROR,payload:'No existe propiedad'});
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
        // let query = `${API}/inmuebles/operaciones/filtrar?idLocalidad=${params.idLocalidad}&idBarrio=${params.idBarrio}&idCategoria=${params.idCategoria}&idOperacion=${params.idOperacion}&order=${params.precio}&moneda=${params.moneda}`;
        // if(rangoPrecio){
        //     query += `&minPrecio=${rangoPrecio.minPrecio}&maxPrecio=${rangoPrecio.maxPrecio}`
        // }
        // query += `&cantidad=6&desde=0`;
        //const reqPropiedad = await fetch(query);
        //const dataPropiedad = await reqPropiedad.json();
        const reqPropiedades = await fetch(`${API}/inmuebles?cantidad=6&desde=0&order=normal`);
        const dataPropiedad = await reqPropiedades.json();
        if(!dataPropiedad.ok){
            return dispatch({
                type:ERROR,
                payload:dataPropiedad
            })
        }
        return dispatch({
            type:OBTENER_PROPIEDADES,
            payload:dataPropiedad.inmuebles
        })
    } catch (error) {
        dispatch({
            type:ERROR,
            payload:error.message
        })
    }
}
