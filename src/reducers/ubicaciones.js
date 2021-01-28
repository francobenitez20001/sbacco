import {LOADING,ERROR,OBTENER_UBICACIONES} from '../types/ubicacionesTypes';

const INITIAL_STATE = {
    ubicaciones:[],
    loading:false,
    error:null
}

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case OBTENER_UBICACIONES:
            return {...state,loading:false,error:null,ubicaciones:action.payload}
        case LOADING:
            return{...state,loading:true}
        case ERROR:
            return{...state,loading:false,error:action.payload}
        default:
            return state;
    }
}