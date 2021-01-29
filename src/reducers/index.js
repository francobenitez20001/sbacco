import {combineReducers} from 'redux';
import categoriasReducer from './categorias';
import operacionesReducer from './operaciones';
import propiedadesReducer from './propiedades';
import ubicacionesReducer from './ubicaciones';
import contactoReducer from './contacto';
import nosotrosReducer from './nosotros';

export default combineReducers({
    //aca van todos los reducers que voy a tener en la app
    categoriasReducer,
    operacionesReducer,
    propiedadesReducer,
    ubicacionesReducer,
    contactoReducer,
    nosotrosReducer
});