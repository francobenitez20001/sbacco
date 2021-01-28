import {LOADING,ERROR,OBTENER_UBICACIONES} from '../types/ubicacionesTypes';
import {API} from '../config';

export const getUbicaciones = ()=>async(dispatch)=>{
    dispatch({
        type:LOADING
    });
    try {
        const reqUbicaciones = await fetch(`${API}/ubicaciones`);
        const dataUbicaciones = await reqUbicaciones.json();
        return dispatch({
            type:OBTENER_UBICACIONES,
            payload:dataUbicaciones.data
        })
    } catch (error) {
        dispatch({
            type:ERROR,
            payload:error.message
        })
    }
}