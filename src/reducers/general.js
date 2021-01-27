import {LOADING,ERROR} from '../types/generalTypes';

//inicializo el estado del reducer.
const INITIAL_STATE = {
    loading:false,
    error:null
};

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case LOADING:
            return{...state,loading:true}
        case ERROR:
            return{...state,loading:false,error:action.payload}
        default:
            return state;
    }
}