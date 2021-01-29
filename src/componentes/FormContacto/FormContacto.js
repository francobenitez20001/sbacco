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
        mensaje:'',
        asunto:''
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
                <p className="" id="tituloPropiedadesSeccion">{titulo}</p>
            :   <p className="" style={{fontSize:'24px',color:'#83014b'}}>Contacto</p>}

            {error ? <Error mensaje="Todos los campos son obligatorios"/> : null}
            {loader ? <div className="text-center"><Loader/></div> : null}
            <form className="example-form animated fadeIn fast" onSubmit={handleSubmit}>
                <div className="my-2 __withBorderLeft">
                    <TextField
                        id="outlined-full-width"
                        label="Nombre"
                        style={{ margin: 8 }}
                        placeholder="Nombre"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={handleChange}
                        value={mensaje.nombre}
                        name="nombre"
                    />
                </div>
                <div className="my-2">
                    <TextField
                        id="outlined-full-width"
                        label="Apellido"
                        style={{ margin: 8 }}
                        placeholder="Apellido"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={handleChange}
                        value={mensaje.apellido}
                        name="apellido"
                    />
                </div>
                <div className="my-2">
                    <TextField
                        id="outlined-full-width"
                        label="Email"
                        style={{ margin: 8 }}
                        placeholder="email"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={handleChange}
                        value={mensaje.email}
                        name="email"
                    />
                </div>
                <div className="my-2">
                    <TextField
                        id="outlined-full-width"
                        label="Asunto"
                        style={{ margin: 8 }}
                        placeholder="Asunto"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={handleChange}
                        value={mensaje.asunto}
                        name="Asunto"
                    />
                </div>
                <div className="my-2">
                    <TextField
                        id="outlined-full-width"
                        label="Teléfono"
                        style={{ margin: 8 }}
                        placeholder="Teléfono"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={handleChange}
                        value={mensaje.telefono}
                        name="telefono"
                    />
                </div>
                <div className="my-2">
                    <TextField
                        id="outlined-full-width"
                        label="Consulta"
                        style={{ margin: 8 }}
                        placeholder="Consulta"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={handleChange}
                        value={mensaje.mensaje}
                        name="mensaje"
                    />
                </div>
                <div className="my-2">
                    <button type="submit" className="btn btn-block botonEnviar">Enviar</button>
                </div>
            </form>
        </Fragment>
    );
}
 
export default FormContacto;