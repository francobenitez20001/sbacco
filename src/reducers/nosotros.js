import {GET_INFO,LOADING,ERROR} from '../types/nosotros';

const INITIAL_STATE = {
    info:null,
    loading:false,
    error:null
};

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case GET_INFO:
            return {...state,loading:false,error:null,info:action.payload}
        case LOADING:
            return{...state,loading:true}
        case ERROR:
            return{...state,loading:false,error:action.payload}
        default:
            return state;
    }
}