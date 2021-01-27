import {LOADING,ERROR,OBTENER_OPERACIONES} from '../types/operacionesTypes';
import {API} from '../config';

export const getOperaciones = disaptch=>async()=>{
    disaptch({
        type:LOADING
    });
    try {
        const reqOperaciones = await fetch(`${API}/operaciones`);
        const dataOperaciones = await reqOperaciones.json();
        return disaptch({
            type:OBTENER_OPERACIONES,
            payload:dataOperaciones.data
        })
    } catch (error) {
        disaptch({
            type:ERROR,
            payload:error.message
        })
    }
}