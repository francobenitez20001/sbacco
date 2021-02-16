import {OBTENER_BARRIOS,LOADING,ERROR,FILTRAR} from '../types/barrios';

const INITIAL_STATE = {
    barrios:[],
    barriosFiltrados:[],
    loading:false,
    error:null
};

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case OBTENER_BARRIOS:
            return {...state,loading:false,error:null,barrios:action.payload,barriosFiltrados:action.payload}
        case FILTRAR:
            return {...state,loading:false,error:null,barriosFiltrados:action.payload}
        case LOADING:
            return{...state,loading:true}
        case ERROR:
            return{...state,loading:false,error:action.payload}
        default:
            return state;
    }
}