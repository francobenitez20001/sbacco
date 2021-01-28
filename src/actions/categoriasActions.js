import {LOADING,ERROR,OBTENER_CATEGORIAS} from '../types/categorias';
import {API} from '../config';

export const getCategorias = ()=>async(dispatch)=>{
    dispatch({
        type:LOADING
    });
    try {
        const reqCategorias = await fetch(`${API}/categorias`);
        const dataCategorias = await reqCategorias.json();
        return dispatch({
            type:OBTENER_CATEGORIAS,
            payload:dataCategorias.data
        })
    } catch (error) {
        dispatch({
            type:ERROR,
            payload:error.message
        })
    }
}