import {LOADING,ERROR,OBTENER_CATEGORIAS} from '../types/categorias';
import {API} from '../config';

export const getCategorias = disaptch=>async()=>{
    disaptch({
        type:LOADING
    });
    try {
        const reqCategorias = await fetch(`${API}/categorias`);
        const dataCategorias = await reqCategorias.json();
        return disaptch({
            type:OBTENER_CATEGORIAS,
            payload:dataCategorias.data
        })
    } catch (error) {
        disaptch({
            type:ERROR,
            payload:error.message
        })
    }
}