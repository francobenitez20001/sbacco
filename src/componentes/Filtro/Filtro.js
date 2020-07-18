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
import './Filtro.css';

const useStyles = makeStyles((theme) => ({
    formControl: {
      width:200
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));
  
const Filtro = ({setPropiedades}) => {
    const classes = useStyles();
    const [operaciones, setOperaciones] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [localidades, setLocalidades] = useState([]);
    const [check, setCheck] = useState(false);
    useEffect(() => {
        const getData = ()=>{
            fetch('http://104.197.241.81:3000/operaciones').then(res=>res.json()).then(operaciones=>{
                setOperaciones(operaciones.data);
            });
            fetch('http://104.197.241.81:3000/ubicaciones').then(res=>res.json()).then(ubicaciones=>{
                setLocalidades(ubicaciones.data);
            });
            fetch('http://104.197.241.81:3000/categorias').then(res=>res.json()).then(categorias=>{
                setCategorias(categorias.data);
            });
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

    const [error, setError] = useState(false);//completar campos
    const [sinPropiedad, setSinPropiedad] = useState(false);
    const [loader, setLoader] = useState(false);
  
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
        setSinPropiedad(false);
        setLoader(true);
        document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
        let query = `http://104.197.241.81:3000/filtrar_todo/${busqueda.idLocalidad}/${busqueda.idCategoria}/${busqueda.idOperacion}/${busqueda.precio}/${busqueda.moneda}`;
        if(check){
            query += `?minPrecio=${rango.minPrecio}&maxPrecio=${rango.maxPrecio}`;
        }
        fetch(query).then(res=>res.json()).then(response=>{
            setLoader(false);
            document.getElementsByTagName('body')[0].style.overflowY='visible';
            if(!response.data){
                setSinPropiedad(true);
                return;
            };
            setPropiedades(response.data);
        })
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

    return (
        <div className="container-fluid my-4 jumbotron">
            {loader?<LoaderFullWidth/>:null}
            {error ? <Error mensaje="Completa todos los campos"/> : null}
            {sinPropiedad ? <Error mensaje="No se encontraron resultados con la busqueda"/> : null}
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
                                {localidades.map(localidad=>(
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
        </div>
    );
}
 
export default Filtro;