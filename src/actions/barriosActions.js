import {LOADING,ERROR,OBTENER_BARRIOS,FILTRAR} from '../types/barrios';
import {API} from '../config';

export const getBarrios = ()=>async(dispatch)=>{
    dispatch({
        type:LOADING
    });
    try {
        const reqBarrios = await fetch(`${API}/barrios`);
        const dataBarrios = await reqBarrios.json();
        return dispatch({
            type:OBTENER_BARRIOS,
            payload:dataBarrios.data
        })
    } catch (error) {
        dispatch({
            type:ERROR,
            payload:error.message
        })
    }
}

export const filtrarBarriosPorIdLocalidad = idLocalidad=>(dispatch,getState)=>{
    let {barrios} = getState().barriosReducer;
    if(barrios.length>0){
        let barriosFiltrados = barrios.filter(barrio=>barrio.idLocalidad == idLocalidad);
        return dispatch({
            type:FILTRAR,
            payload:barriosFiltrados
        })
    }
}