import {LOADING,ERROR,OBTENER_PROPIEDADES,VER_PROPIEDAD} from '../types/propiedadesTypes';
import {API} from '../config';

export const getPropiedades = disaptch=>async()=>{
    disaptch({
        type:LOADING
    });
    try {
        const reqPropiedades = await fetch(`${API}/listar_inmuebles/6/normal`);
        const dataPropiedades = await reqPropiedades.json();
        return disaptch({
            type:OBTENER_PROPIEDADES,
            payload:dataPropiedades.data
        })
    } catch (error) {
        disaptch({
            type:ERROR,
            payload:error.message
        })
    }
}

export const getPropiedad = disaptch=>async(id)=>{
    disaptch({
        type:LOADING
    });
    try {
        const reqPropiedad = await fetch(`${API}/detallar_inmueble_id/${id}`);
        const dataPropiedad = await reqPropiedad.json();
        if(dataPropiedad.length<1) return disaptch({type:ERROR,payload:'No existe propiedad'});
        return disaptch({
            type:VER_PROPIEDAD,
            payload:dataPropiedad.data[0]
        })
    } catch (error) {
        disaptch({
            type:ERROR,
            payload:error.message
        })
    }
}

export const filtrarPropiedades = disaptch=>async params=>{
    disaptch({
        type:LOADING
    });
    try {
        let query = `${API}/filtrar_todo/${params.idLocalidad}/${params.idCategoria}/${params.idOperacion}/${params.precio}/${params.moneda}`;
        if(params.minPrecio && params.maxPrecio){
            query += `?minPrecio=${params.minPrecio}&maxPrecio=${params.maxPrecio}`
        }
        const reqPropiedad = await fetch(query);
        const dataPropiedad = await reqPropiedad.json();
        return disaptch({
            type:OBTENER_PROPIEDADES,
            payload:dataPropiedad.data[0]
        })
    } catch (error) {
        disaptch({
            type:ERROR,
            payload:error.message
        })
    }
}