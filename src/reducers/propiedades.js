import {LOADING,ERROR,OBTENER_PROPIEDADES,VER_PROPIEDAD,LOADING_MAS,ERROR_MAS_PROPIEDADES} from '../types/propiedadesTypes';

const INITIAL_STATE = {
    propiedades:[],
    propiedad:{},
    loading:false,
    loadingMas:false,
    errorMasPropiedades:null,
    error:null
}

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case OBTENER_PROPIEDADES:
            return {...state,loading:false,loadingMas:false,errorMasPropiedades:null,error:null,propiedades:action.payload}
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
        default:
            return state;
    }
}