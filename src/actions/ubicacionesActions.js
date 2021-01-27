import {LOADING,ERROR,OBTENER_UBICACIONES} from '../types/ubicacionesTypes';
import {API} from '../config';

export const getCategorias = disaptch=>async()=>{
    disaptch({
        type:LOADING
    });
    try {
        const reqUbicaciones = await fetch(`${API}/categorias`);
        const dataUbicaciones = await reqUbicaciones.json();
        return disaptch({
            type:OBTENER_UBICACIONES,
            payload:dataUbicaciones.data
        })
    } catch (error) {
        disaptch({
            type:ERROR,
            payload:error.message
        })
    }
}