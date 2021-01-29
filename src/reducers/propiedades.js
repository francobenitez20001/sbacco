import {LOADING,ERROR,OBTENER_PROPIEDADES,VER_PROPIEDAD} from '../types/propiedadesTypes';

const INITIAL_STATE = {
    propiedades:[],
    propiedad:{},
    loading:false,
    error:null
}

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case OBTENER_PROPIEDADES:
            return {...state,loading:false,error:null,propiedades:action.payload}
        case VER_PROPIEDAD:
            return {...state,loading:false,error:null,propiedad:{data:action.payload.data[0],imagenes:action.payload.imagenes}}
        case LOADING:
            return{...state,loading:true}
        case ERROR:
            return{...state,loading:false,error:action.payload}
        default:
            return state;
    }
}