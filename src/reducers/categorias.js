import {LOADING,ERROR,AGREGAR} from '../types/categorias';

const INITIAL_STATE = {
    categorias:[],
    loading:false,
    error:null
}

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case OBTENER_CATEGORIAS:
            return {...state,loading:false,error:null,categorias:action.payload}
        case LOADING:
            return{...state,loading:true}
        case ERROR:
            return{...state,loading:false,error:action.payload}
        default:
            return state;
    }
}