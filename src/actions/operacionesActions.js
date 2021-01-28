import {LOADING,ERROR,OBTENER_OPERACIONES} from '../types/operacionesTypes';
import {API} from '../config';

export const getOperaciones = ()=>async(dispatch)=>{
    dispatch({
        type:LOADING
    });
    try {
        const reqOperaciones = await fetch(`${API}/operaciones`);
        const dataOperaciones = await reqOperaciones.json();
        return dispatch({
            type:OBTENER_OPERACIONES,
            payload:dataOperaciones.data
        })
    } catch (error) {
        dispatch({
            type:ERROR,
            payload:error.message
        })
    }
}