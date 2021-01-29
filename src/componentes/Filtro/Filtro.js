import React,{useState,useEffect} from 'react';
import Error from '../Error/Error'
import LoaderFullWidth from '../Loader/LoaderFullWidth';
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
import Loader from '../Loader/Loader';
import Swal from 'sweetalert2';
import './Filtro.css';

const {getCategorias} = categoriasActions;
const {getOperaciones} = operacionesActions;
const {getUbicaciones} = ubicacionesActions;
const {filtrarPropiedades} = propiedadesActions;

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
    useEffect(() => {
        const getData = ()=>{
            const {operaciones} = props.operacionesReducer;
            const {categorias} = props.categoriasReducer;
            const {ubicaciones} = props.ubicacionesReducer;
            if(categorias.length===0){
                props.getCategorias();
            }
            if(operaciones.length===0){
                props.getOperaciones();
            }
            if(ubicaciones.length===0){
                props.getUbicaciones();
            }
        }
        getData();
    }, [])

    const [busqueda, setBusqueda] = useState({
        idLocalidad:'',
        idCategoria:'',
        idOperacion:'',
        precio:'',
        moneda:'',
        valor:0
    });

    const [rango, setRango] = useState({
        minPrecio:0,
        maxPrecio:0
    });
  
    const handleChange = event => {
      setBusqueda({
          ...busqueda,
          [event.target.name]:event.target.value
      })
    };

    const handleSubmit = event=>{
        event.preventDefault();
        if (busqueda.idCategoria === '' || busqueda.idOperacion === '' || busqueda.precio === '' || busqueda.moneda === '') {
            setError(true);
            return;
        }
        setError(false);
        if(check){
            props.filtrarPropiedades(busqueda,rango)
        }else{
            props.filtrarPropiedades(busqueda,null);
        }
    }

    const handleChangeCheck = event=>{
        if(check){
            return setCheck(false);
        }
        return setCheck(true);
    };

    const handleChangeCheckValues = event=>{
        setRango({
            ...rango,
            [event.target.name]:event.target.value
        })
    }
    const {operaciones} = props.operacionesReducer;
    const {categorias} = props.categoriasReducer;
    const {ubicaciones} = props.ubicacionesReducer;

    return (
        <div className="container-fluid jumbotron">
            {(error) ? <Error mensaje="Completa todos los campos"/> : null}
            {(props.propiedadesReducer.loading)?<LoaderFullWidth/>:null}
            {(props.propiedadesReducer.error)?
                Swal.fire(
                    'Ups..',
                    props.propiedadesReducer.error,
                    'error'
                )
            :null}
            {(operaciones.length===0 || categorias.length===0 || ubicaciones.length===0)?<Loader/>:
            <form className="col-12" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-12 col-sm-4 col-xl-2 inputFiltro">
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
                    <div className="col-12 col-sm-4 col-xl-2 inputFiltro">
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
                    <div className="col-12 col-sm-4 col-xl-2 inputFiltro">
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
                    <div className="col-12 col-sm-4 col-xl-2 inputFiltro">
                        <FormControl className={classes.formControl + ' w-100'}>
                            <InputLabel id="demo-simple-select-label">Precio</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="precio"
                                value={busqueda.precio}
                                onChange={handleChange}
                            >
                                <MenuItem value="high">Desde el mayor al menor</MenuItem>
                                <MenuItem value="low">Desde el menor al mayor</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-12 col-sm-4 col-xl-2 inputFiltro">
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
                    <div className="col-12 col-sm-4 col-xl-2 pt-3">
                        <FormControlLabel
                            control={<Checkbox checked={check} onChange={handleChangeCheck} name="habilitarRango" />}
                            label="Habilitar rango de precio"
                        />
                    </div>
                    {(!check)?null:
                    <>
                        <div className="col-12 col-sm-2">
                            <FormControl className={classes.formControl + ' w-100'}>
                                <TextField id="valor" 
                                            label="Min. valor"
                                            type="number" 
                                            name="minPrecio"
                                            value={rango.minPrecio}
                                            onChange={handleChangeCheckValues} />
                            </FormControl>
                        </div>
                        <div className="col-12 col-sm-2">
                            <FormControl className={classes.formControl + ' w-100'}>
                                <TextField id="valor" 
                                            label="Max. valor"
                                            type="number" 
                                            name="maxPrecio"
                                            value={rango.maxPrecio}
                                            onChange={handleChangeCheckValues} />
                            </FormControl>
                        </div>
                    </>
                    }
                    <div className="col-12 text-center mt-3">
                        <Button variant="contained" color="secondary" type="submit" className="botonSubmit mt-3">
                                Buscar
                        </Button>
                    </div>
                </div>
            </form>
            }
        </div>
    );
}

const mapStateToProps = ({categoriasReducer,operacionesReducer,ubicacionesReducer,propiedadesReducer})=>{
    return {categoriasReducer,operacionesReducer,ubicacionesReducer,propiedadesReducer}
};

const mapDispatchToProps = {
    getCategorias,
    getOperaciones,
    getUbicaciones,
    filtrarPropiedades
};
 
export default connect(mapStateToProps,mapDispatchToProps)(Filtro);