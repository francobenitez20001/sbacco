import {LOADING,ERROR,OBTENER_OPERACIONES} from '../types/operacionesTypes';

const INITIAL_STATE = {
    operaciones:[],
    loading:false,
    error:null
}

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case OBTENER_OPERACIONES:
            return {...state,loading:false,error:null,operaciones:action.payload}
        case LOADING:
            return{...state,loading:true}
        case ERROR:
            return{...state,loading:false,error:action.payload}
        default:
            return state;
    }
}