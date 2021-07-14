import {LOADING,ERROR,OBTENER_PROPIEDADES,VER_PROPIEDAD,LOADING_MAS, ERROR_MAS_PROPIEDADES, UPDATE_PAGINATION, OBTENER_MAS_PROPIEDADES, APLICAR_FILTRO, RESTABLECER_FILTROS} from '../types/propiedadesTypes';
import {API} from '../config';

export const getPropiedades = ()=>async(dispatch,getState)=>{
    dispatch({
        type:LOADING
    });
    try {
        const {desde,cantidad,filtros:{order}} = getState().propiedadesReducer;
        const reqPropiedades = await fetch(`${API}/inmuebles?cantidad=${cantidad}&desde=${desde}&order=${order}`);
        const dataPropiedades = await reqPropiedades.json();
        return dispatch({
            type:OBTENER_PROPIEDADES,
            payload:dataPropiedades.inmuebles
        })
    } catch (error) {
        dispatch({
            type:ERROR,
            payload:error.message
        })
    }
}

export const getMorePropiedades = ()=>async (dispatch,getState)=>{
    dispatch({
        type:LOADING_MAS
    });
    try {
        const {filtrando,filtros,desde,cantidad} = getState().propiedadesReducer;

        let req;
        if(filtrando){
            let url = `${API}/inmuebles/operaciones/filtrar?cantidad=${cantidad}&order=${filtros.order}&desde=${desde}`;
            req = await fetch(url,{
                headers:{'Content-Type':'application/json'},
                method:'POST',
                body:JSON.stringify({filtros})
            });
        }else{
            let url = `${API}/inmuebles?cantidad=${cantidad}&order=${filtros.order}&desde=${desde}`;
            req = await fetch(url);
        }

        const data = await req.json();

        if(data.inmuebles.length === 0){
            return dispatch({
                type:ERROR_MAS_PROPIEDADES,
                payload:'No se encontraron mas propiedades'
            })
        }
        return dispatch({
            type:OBTENER_MAS_PROPIEDADES,
            payload:data.inmuebles
        });
    } catch (error) {
        dispatch({
            type:ERROR,
            payload:error
        })
    }
}

export const getPropiedad = (id)=>async(dispatch)=>{
    dispatch({
        type:LOADING
    });
    try {
        const reqPropiedad = await fetch(`${API}/inmuebles/${id}`);
        const dataPropiedad = await reqPropiedad.json();
        if(dataPropiedad.inmueble.length==0) return dispatch({type:ERROR,payload:'No existe propiedad'});
        return dispatch({
            type:VER_PROPIEDAD,
            payload:dataPropiedad
        })
    } catch (error) {
        dispatch({
            type:ERROR,
            payload:error.message
        })
    }
}

export const filtrarPropiedades = ()=>async (dispatch,getState)=>{
    dispatch({
        type:LOADING
    });
    try {
        const {filtros,desde,cantidad} = getState().propiedadesReducer;
        let query = `${API}/inmuebles/operaciones/filtrar?order=${filtros.order}&desde=${desde}&cantidad=${cantidad}`;
        const reqPropiedad = await fetch(query,{
            headers:{'Content-Type':'application/json'},
            method:'POST',
            body:JSON.stringify({filtros})
        });
        const dataPropiedad = await reqPropiedad.json();
        if(!dataPropiedad.ok){
            return dispatch({
                type:ERROR,
                payload:dataPropiedad
            })
        }
        return dispatch({
            type:OBTENER_PROPIEDADES,
            payload:dataPropiedad.inmuebles
        })
    } catch (error) {
        dispatch({
            type:ERROR,
            payload:error.message
        })
    }
}

export const aplicarFiltros = filtros => dispatch => {
    return dispatch({
        type:APLICAR_FILTRO,
        payload:filtros
    })
}

export const updatePagination = () => (dispatch) =>{
    return dispatch({
        type:UPDATE_PAGINATION
    })
}

export const restablecerFiltros = () => dispatch => {
    return dispatch({
        type:RESTABLECER_FILTROS
    })
}