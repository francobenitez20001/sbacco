import React,{useState,useEffect} from 'react';
import Error from '../Error/Error';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {connect} from 'react-redux';
import * as operacionesActions from '../../actions/operacionesActions';
import * as ubicacionesActions from '../../actions/ubicacionesActions';
import * as categoriasActions from '../../actions/categoriasActions';
import * as propiedadesActions from '../../actions/propiedadesActions';
import * as barriosActions from '../../actions/barriosActions';
import Loader from '../Loader/Loader';
import { useHistory } from 'react-router-dom';
import { scrollToTop } from '../../helpers';
import './Filtro.css';

const {getCategorias} = categoriasActions;
const {getOperaciones} = operacionesActions;
const {getUbicaciones} = ubicacionesActions;
const {getBarrios,filtrarBarriosPorIdLocalidad} = barriosActions;
const {aplicarFiltros} = propiedadesActions;

const useStyles = makeStyles((theme) => ({
    formControl: {
      width:200
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));
  
const Filtro = (props) => {

    const classes = useStyles();
    const [check, setCheck] = useState(false);
    const [error, setError] = useState(false);
    const [busqueda, setBusqueda] = useState({
        idLocalidad:"",
        idCategoria:"",
        idOperacion:"",
        idBarrio:"",
        order:"",
        moneda:"",
        valor:0,
        minPrecio:"",
        maxPrecio:""
    });
    //state para habilitar el form cuando este toda la data cargada
    let history = useHistory();

    useEffect(() => {
        getData();
    }, []);
    
    const getData = async () => {
        const {operaciones} = props.operacionesReducer;
        const {categorias} = props.categoriasReducer;
        const {ubicaciones} = props.ubicacionesReducer;
        const {barrios} = props.barriosReducer;
        if(categorias.length===0){
            await props.getCategorias();
        }
        if(operaciones.length===0){
            await props.getOperaciones();
        }
        if(ubicaciones.length===0){
            await props.getUbicaciones();
        }
        if(barrios.length==0){
            await props.getBarrios();
        }
    }

  
    const handleChange = event => {
        setBusqueda({
            ...busqueda,
            [event.target.name]:event.target.value
        })
        if(event.target.name === 'idLocalidad'){
            props.filtrarBarriosPorIdLocalidad(event.target.value);
        }
    };

    const handleSubmit = event=>{
        event.preventDefault();
        if (busqueda.idCategoria === '' || busqueda.idOperacion === '') {
            setError(true);
            return;
        }
        setError(false);
        props.aplicarFiltros(busqueda);
        if(history.location.pathname === '/propiedades'){
            return scrollToTop();
        }
        return history.push('/propiedades')
    }

    const {operaciones} = props.operacionesReducer;
    const {categorias} = props.categoriasReducer;
    const {ubicaciones} = props.ubicacionesReducer;
    const {barriosFiltrados} = props.barriosReducer;

    return (
        <div className="jumbotron">
            {(error) ? <Error mensaje="Completa todos los campos"/> : null}
            <form className="col-12" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-12 col-sm-3 inputFiltro">
                        <FormControl className={classes.formControl + ' w-100'}>
                            <InputLabel id="demo-simple-select-label">Operacion</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="idOperacion"
                                value={busqueda.idOperacion}
                                onChange={handleChange}
                            >
                                {operaciones.map(oper=>(
                                    <MenuItem key={oper.id} value={oper.id}>{oper.operacion}</MenuItem>
                                ))}
                                
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-12 col-sm-3 inputFiltro">
                        <FormControl className={classes.formControl + ' w-100'}>
                            <InputLabel id="demo-simple-select-label">Propiedad</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="idCategoria"
                                value={busqueda.idCategoria}
                                onChange={handleChange}
                            >
                               {categorias.map(categoria=>(
                                   <MenuItem key={categoria.id} value={categoria.id}>{categoria.categoria}</MenuItem>
                               ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-12 col-sm-3 inputFiltro">
                        <FormControl className={classes.formControl + ' w-100'}>
                            <InputLabel id="demo-simple-select-label">Ciudad</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="idLocalidad"
                                value={busqueda.idLocalidad}
                                onChange={handleChange}
                            >
                                {ubicaciones.map(localidad=>(
                                    <MenuItem key={localidad.id} value={localidad.id}>{localidad.localidad}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-12 col-sm-3 inputFiltro">
                        <FormControl className={classes.formControl + ' w-100'}>
                            <InputLabel id="demo-simple-select-label">Barrio</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="idBarrio"
                                value={busqueda.idBarrio}
                                onChange={handleChange}
                            >
                                {barriosFiltrados.map(barrio=>(
                                    <MenuItem key={barrio.idBarrio} value={barrio.idBarrio}>{barrio.barrio}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-12 col-sm-3 inputFiltro">
                        <FormControl className={classes.formControl + ' w-100'}>
                            <InputLabel id="demo-simple-select-label">Precio</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="order"
                                value={busqueda.order}
                                onChange={handleChange}
                            >
                                <MenuItem value="high">Desde el mayor al menor</MenuItem>
                                <MenuItem value="low">Desde el menor al mayor</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-12 col-sm-3 inputFiltro">
                        <FormControl className={classes.formControl + ' w-100'}>
                            <InputLabel id="demo-simple-select-label">Moneda</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="moneda"
                                value={busqueda.moneda}
                                onChange={handleChange}
                            >
                                <MenuItem value="Dolar">USD</MenuItem>
                                <MenuItem value="Pesos">$</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-12 col-sm-3 my-2">
                        {(!check)?null:
                        <FormControl className={classes.formControl + ' w-100'}>
                            <TextField id="valor" 
                                        label="Min. valor"
                                        type="number" 
                                        name="minPrecio"
                                        value={busqueda.minPrecio}
                                        onChange={handleChange} />
                        </FormControl>}
                    </div>
                    <div className="col-12 col-sm-3 my-2">
                        {(!check)?null:
                        <FormControl className={classes.formControl + ' w-100'}>
                            <TextField id="valor" 
                                        label="Max. valor"
                                        type="number" 
                                        name="maxPrecio"
                                        value={busqueda.maxPrecio}
                                        onChange={handleChange} />
                        </FormControl>}
                    </div>
                    <div className="col-12 col-sm-3 pt-3">
                        <FormControlLabel
                            control={<Checkbox checked={check} onChange={()=>setCheck(!check)} name="habilitarRango" />}
                            label="Habilitar rango de precio"
                        />
                    </div>
                    <div className="col-12 text-center mt-3">
                        <Button variant="contained" color="secondary" type="submit" className="botonSubmit mt-3">
                                Buscar
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = ({categoriasReducer,operacionesReducer,ubicacionesReducer,propiedadesReducer,barriosReducer})=>{
    return {categoriasReducer,operacionesReducer,ubicacionesReducer,propiedadesReducer,barriosReducer}
};

const mapDispatchToProps = {
    getCategorias,
    getOperaciones,
    getUbicaciones,
    getBarrios,
    filtrarBarriosPorIdLocalidad,
    aplicarFiltros
};
 
export default connect(mapStateToProps,mapDispatchToProps)(Filtro);