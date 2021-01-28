import {GET_INFO,LOADING,ERROR} from '../types/contacto';
import {API} from '../config';

export const getInfo = ()=>async dispatch=>{
    dispatch({
        type:LOADING
    })
    try {
        const reqContacto = await fetch(`${API}/contacto`);
        const dataContacto = await reqContacto.json();
        return dispatch({
            type:GET_INFO,
            payload:dataContacto.data[0]
        })
    } catch (error) {
        dispatch({
            type:ERROR,
            payload:error.message
        })
    }
}