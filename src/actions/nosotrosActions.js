import {GET_INFO,LOADING,ERROR} from '../types/nosotros';
import {API} from '../config';

export const getInfo = ()=>async dispatch=>{
    dispatch({
        type:LOADING
    })
    try {
        const reqNosotros = await fetch(`${API}/nosotros`);
        const dataNosotros = await reqNosotros.json();
        return dispatch({
            type:GET_INFO,
            payload:dataNosotros.data[0]
        })
    } catch (error) {
        dispatch({
            type:ERROR,
            payload:error.message
        })
    }
}