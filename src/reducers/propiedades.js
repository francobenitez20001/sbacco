import {LOADING,ERROR,OBTENER_PROPIEDADES,VER_PROPIEDAD,LOADING_MAS,ERROR_MAS_PROPIEDADES, APLICAR_FILTRO, RESTABLECER_FILTROS, UPDATE_PAGINATION, OBTENER_MAS_PROPIEDADES} from '../types/propiedadesTypes';

const INITIAL_STATE = {
    propiedades:[],
    propiedad:{},
    loading:false,
    loadingMas:false,
    errorMasPropiedades:null,
    error:null,
    desde:0,
    cantidad:6,
    filtrando:false,
    filtros:{
        idOperacion:null,
        idCategoria:null,
        idLocalidad:null,
        idBarrio:null,
        order:'normal',
        moneda:null,
        minPrecio:null,
        maxPrecio:null
    }
}

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case OBTENER_PROPIEDADES:
            return {...state,loading:false,loadingMas:false,errorMasPropiedades:null,error:null,propiedades:action.payload}
        case OBTENER_MAS_PROPIEDADES:
            return {
                ...state,
                loading:false,
                loadingMas:false,
                error:null,
                errorMasPropiedades:false,
                propiedades:[...state.propiedades,...action.payload]
            }
        case VER_PROPIEDAD:
            return {...state,loading:false,errorMasPropiedades:null,error:null,propiedad:{data:action.payload.inmueble[0],imagenes:action.payload.imagenes}}
        case LOADING:
            return{...state,loading:true}
        case LOADING_MAS:
            return {...state,loadingMas:true}
        case ERROR_MAS_PROPIEDADES:
            return {...state,errorMasPropiedades:action.payload}
        case ERROR:
            return{...state,loading:false,error:action.payload}
        case APLICAR_FILTRO:
            return{
                ...state,
                desde:0,
                cantidad:6,
                filtrando:true,
                filtros:{
                    idOperacion:action.payload.idOperacion !== '' ? action.payload.idOperacion : null,
                    idCategoria:action.payload.idCategoria !== '' ? action.payload.idCategoria : null,
                    idLocalidad:action.payload.idLocalidad !== '' ? action.payload.idLocalidad : null,
                    idBarrio:action.payload.idBarrio !== '' ? action.payload.idBarrio : null,
                    minPrecio:action.payload.minPrecio !== '' ? action.payload.minPrecio : null,
                    maxPrecio:action.payload.maxPrecio !== '' ? action.payload.maxPrecio : null,
                    moneda:action.payload.moneda !== '' ? action.payload.moneda : null,
                    order:action.payload.order !== '' ? action.payload.order : 'normal'
                }
            }
        case RESTABLECER_FILTROS:
            return {
                ...state,
                desde:0,
                cantidad:6,
                filtrando:false,
                filtros:{
                    idOperacion:null,
                    idCategoria:null,
                    idLocalidad:null,
                    idBarrio:null,
                    order:'normal',
                    moneda:null,
                    minPrecio:null,
                    maxPrecio:null
                }
            }
        case UPDATE_PAGINATION:
            return {
                ...state,
                desde:state.desde + state.cantidad
            }
        default:
            return state;
    }
}