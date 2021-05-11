import React, { useEffect, useState } from 'react';
import LoaderFullWidth from '../Loader/LoaderFullWidth';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { FormHelperText } from '@material-ui/core';
import {connect} from 'react-redux';
import * as ubicacionesActions from '../../actions/ubicacionesActions';
import * as barriosActions from '../../actions/barriosActions';
import * as categoriasActions from '../../actions/categoriasActions';
import * as operacionesActions from '../../actions/operacionesActions';
import Swal from 'sweetalert2';
import { API } from '../../config';

const {getUbicaciones} = ubicacionesActions;
const {getBarrios,filtrarBarriosPorLocalidad} = barriosActions;
const {getCategorias} = categoriasActions;
const {getOperaciones} = operacionesActions;

const FormTasacion = (props) => {
    const {barriosReducer:{barrios,barriosFiltrados},ubicacionesReducer:{ubicaciones},categoriasReducer:{categorias},operacionesReducer:{operaciones},getUbicaciones,getBarrios,getCategorias,getOperaciones,filtrarBarriosPorLocalidad} = props;

    const [formValues, setFormValues] = useState({
        nombre:'',
        email:'',
        telefono:'',
        localidad:'',
        barrio:'',
        categoria:'',
        operacion:'',
        mensaje:''
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getResources();
    }, [])

    const getResources = async ()=>{
        if(!ubicaciones.length){
            getUbicaciones();
        }
        if(!barrios.length){
            getBarrios();
        }
        if(!categorias.length){
            getCategorias();
        }
        if(!operaciones.length){
            getOperaciones();
        }
    }

    const handleChange = e=>{
        if(e.target.name == 'localidad'){
            filtrarBarriosPorLocalidad(e.target.value);
        }
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async e=>{
        e.preventDefault();
        for (const key in formValues) {
            if (Object.hasOwnProperty.call(formValues, key)) {
                const element = formValues[key];
                if(element == ''){
                    Swal.fire('Atención','Completa todos los campos','warning').then(()=>setError(null));
                    return;
                }
            }
        }
        const requestConfig = {
            method:'POST',
            body:JSON.stringify(formValues),
            headers:{'Content-Type':'application/json'}
        }
        try {
            setLoading(true);
            const reqTasacion = await fetch(`${API}/tasaciones`,requestConfig);
            setLoading(false);
            if(reqTasacion.status !== 200){
                Swal.fire('Ups...','Ha ocurrido un error, inténtelo más tarde','error');
                return;
            }
            Swal.fire('Listo','Se ha enviado tu pedido de tasacion, en breve nos comunicaremos con vos','success').then(()=>setFormValues({
                nombre:'',
                email:'',
                telefono:'',
                localidad:'',
                barrio:'',
                categoria:'',
                operacion:'',
                mensaje:'' 
            }));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        !ubicaciones.length || !barrios.length || !categorias.length || !operaciones.length || loading ? <LoaderFullWidth/> :
        <form className="example-form animated fadeIn fast" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-12 col-md-6 my-2 __withBorderLeft">
                    <TextField
                        id="outlined-full-width"
                        label="Nombre y apellido"
                        style={{ margin: 8 }}
                        placeholder="Ingrese su nombre"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={handleChange}
                        value={formValues.nombre}
                        name="nombre"
                    />
                </div>
                <div className="col-12 col-md-6 my-2">
                    <TextField
                        id="outlined-full-width"
                        label="Email"
                        style={{ margin: 8 }}
                        placeholder="Ingrese su email"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={handleChange}
                        value={formValues.email}
                        name="email"
                    />
                </div>
                <div className="col-12 col-md-6 my-3">
                    <TextField
                        id="outlined-full-width"
                        label="Teléfono"
                        style={{ margin: 8 }}
                        placeholder="Ingrese su teléfono"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={handleChange}
                        value={formValues.telefono}
                        name="telefono"
                    />
                </div>
                <div className="col-12 col-md-6 my-3">
                    <InputLabel id="demo-simple-select-label">Ciudad</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={handleChange}
                        className={`w-100`}
                        name="localidad"
                        defaultValue={formValues.localidad}
                        style={{ margin: 8 }}
                    >
                        <MenuItem value="">Seleccione una localidad</MenuItem>
                        {ubicaciones.map(u=>(
                            <MenuItem key={u.id} value={u.localidad}>{u.localidad}</MenuItem>
                        ))}
                        <MenuItem value="otro">Otro</MenuItem>
                    </Select>
                    <FormHelperText>Elija una localidad acorde a su propiedad.</FormHelperText>
                </div>
                <div className="col-12 col-md-6 my-3">
                    <InputLabel id="demo-simple-select-label">Barrio</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        defaultValue={formValues.barrio}
                        name="barrio"
                        onChange={handleChange}
                        className={`w-100`}
                        style={{ margin: 8 }}
                    >
                        <MenuItem value="">Seleccione un barrio</MenuItem>
                        {barriosFiltrados.map(b=>(
                            <MenuItem key={b.idBarrio} value={b.barrio}>{b.barrio}</MenuItem>
                        ))}
                        <MenuItem value="otro">Otro</MenuItem>
                    </Select>
                    <FormHelperText>Elija una localidad acorde a su propiedad.</FormHelperText>
                </div>
                <div className="col-12 col-md-6 my-3">
                    <InputLabel id="demo-simple-select-label">Propiedad</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formValues.categoria}
                        onChange={handleChange}
                        className={`w-100`}
                        name="categoria"
                        defaultValue={formValues.categoria}
                        style={{ margin: 8 }}
                    >
                        <MenuItem value="">Seleccione un tipo de propiedad</MenuItem>
                        {categorias.map(cat=>(
                            <MenuItem key={cat.id} value={cat.categoria}>{cat.categoria}</MenuItem>
                        ))}
                        <MenuItem value="otro">Otro</MenuItem>
                    </Select>
                    <FormHelperText>Seleccione el tipo de propiedad que coincida con la suya.</FormHelperText>
                </div>
                <div className="col-12 col-md-6 my-3">
                    <InputLabel id="demo-simple-select-label">Operación</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="operacion"
                        defaultValue={formValues.operacion}
                        onChange={handleChange}
                        className={`w-100`}
                        style={{ margin: 8 }}
                    >
                        <MenuItem value="">Seleccione una operación</MenuItem>
                        {operaciones.map(op=>(
                            <MenuItem key={op.id} value={op.operacion}>{op.operacion}</MenuItem>
                        ))}
                        <MenuItem value="otro">Otro</MenuItem>
                    </Select>
                    <FormHelperText>Elija una operación acorde a su propiedad.</FormHelperText>
                </div>
                <div className="col-12 my-3">
                    <TextField
                        id="outlined-full-width"
                        label="Consulta"
                        style={{ margin: 8 }}
                        placeholder="Ingrese su consulta"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={handleChange}
                        value={formValues.mensaje}
                        name="mensaje"
                    />
                </div>
            </div>
            <div className="my-2">
                <button type="submit" className="btn btn-block botonEnviar">Enviar</button>
            </div>
            <style jsx>{`
                form .__withBorderLeft{
                    border-left: solid 1px #83014b;
                }       
            `}</style>
        </form>
    );
}

const mapStateToProps = ({ubicacionesReducer,barriosReducer,categoriasReducer,operacionesReducer})=>{
    return {
        ubicacionesReducer,
        barriosReducer,
        categoriasReducer,
        operacionesReducer
    }
}

const mapDispatchToProps = {
    getUbicaciones,
    getBarrios,
    getCategorias,
    getOperaciones,
    filtrarBarriosPorLocalidad
}

export default connect(mapStateToProps,mapDispatchToProps)(FormTasacion);