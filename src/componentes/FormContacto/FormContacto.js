import React, {Fragment} from 'react';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import TextField from '@material-ui/core/TextField';

import './FormContacto.css';

const FormContacto = ({titulo}) => {

    const [mensaje, setMensaje] = React.useState({
        nombre:'',
        apellido:'',
        email:'',
        telefono:'',
        mensaje:''
    });
    const [error, setError] = React.useState(false);
    const [loader, setLoader] = React.useState(false);
    const handleChange = event=>{
        setMensaje({
            ...mensaje,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = event=>{
        event.preventDefault();
        if (mensaje.nombre.trim() === '' || mensaje.apellido.trim() === '' || mensaje.email.trim() === '' || mensaje.telefono.trim() === '' || mensaje.mensaje.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        setLoader(true);
        fetch('http://xrargentina.org/backend/enviar.php',{
            method:'POST',
            body:JSON.stringify(mensaje)
        }).then(res=>res.json()).then(response=>{
            setLoader(false);
            console.log(response);
        })
    }



    return (
        <Fragment>
            {titulo ? 
                <p className="text-center" id="tituloPropiedadesSeccion">{titulo}</p>
            :   <p className="text-center" id="tituloPropiedadesSeccion">Tu consulta <span>no es molestia</span></p>}

            {error ? <Error mensaje="Todos los campos son obligatorios"/> : null}
            {loader ? <div className="text-center"><Loader/></div> : null}
            <form className="example-form animated fadeIn fast" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-12 col-md-6 my-2">
                        <TextField id="standard-basic" onChange={handleChange} value={mensaje.nombre} name="nombre" className="w-100" label="Nombre" />
                    </div>
                    <div className="col-12 col-md-6 my-2">
                        <TextField id="standard-basic" onChange={handleChange} value={mensaje.apellido} name="apellido" className="w-100" label="Apellido" />
                    </div>
                    <div className="col-12 col-md-6 my-2">
                        <TextField id="standard-basic" onChange={handleChange} value={mensaje.email} name="email" className="w-100" label="Email" />
                    </div>
                    <div className="col-12 col-md-6 my-2">
                        <TextField id="standard-basic" onChange={handleChange} value={mensaje.telefono} name="telefono" className="w-100" label="Celular" />
                    </div>
                    <div className="col-12">
                        <TextField id="standard-basic" onChange={handleChange} value={mensaje.mensaje} name="mensaje" className="w-100" label="Mensaje" />
                        <button type="submit" className="btn btn-block botonEnviar">Enviar</button>
                    </div>
                </div>
            </form>
        </Fragment>
    );
}
 
export default FormContacto;