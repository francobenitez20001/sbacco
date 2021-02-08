import React, {Fragment,useEffect,useState} from 'react';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import TextField from '@material-ui/core/TextField';
import {API} from '../../config';

import './FormContacto.css';

const FormContacto = ({titulo,propiedadDetalle}) => {
    const [mensaje, setMensaje] = React.useState({
        nombre:'',
        email:'',
        telefono:'',
        mensaje:'',
        asunto:'',
        propiedad:null
    });
    const [error, setError] = useState(false);
    const [loader, setLoader] = useState(false);
    const [sendMail, setSendMail] = useState(false);

    useEffect(() => {
        if(propiedadDetalle){
            setMensaje({...mensaje,propiedad:propiedadDetalle});
        }
    }, [])

    const handleChange = event=>{
        setMensaje({
            ...mensaje,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = event=>{
        event.preventDefault();
        setSendMail(false);
        if (mensaje.nombre.trim() === '' || mensaje.email.trim() === '' || mensaje.telefono.trim() === '' || mensaje.mensaje.trim() === '' || mensaje.asunto.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        setLoader(true);
        fetch(`${API}/contacto/sendMail`,{
            method:'POST',
            body:JSON.stringify(mensaje),
            headers:{'Content-Type':'application/json'}
        }).then(res=>res.json()).then(response=>{
            setLoader(false);
            if(response.status){
                setSendMail(true);
                setMensaje({
                    nombre:'',
                    email:'',
                    telefono:'',
                    mensaje:'',
                    asunto:'' 
                })
            }
        }).catch(err=>{
            setLoader(false);
            setError(err);
        })
    }



    return (
        <Fragment>
            {titulo ? 
                <p className="" id="tituloPropiedadesSeccion">{titulo}</p>
            :   <p className="" style={{fontSize:'24px',color:'#83014b'}}>Contacto</p>}

            {error ? <Error mensaje="Todos los campos son obligatorios"/> : null}
            {sendMail ? <div className="text-center alert alert-success">Se ha enviado su consulta</div>:null}
            {loader ? <div className="text-center"><Loader/></div> : null}
            <form className="example-form animated fadeIn fast" onSubmit={handleSubmit}>
                <div className="my-2 __withBorderLeft">
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
                        value={mensaje.nombre}
                        name="nombre"
                    />
                </div>
                <div className="my-2">
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
                        value={mensaje.email}
                        name="email"
                    />
                </div>
                <div className="my-2">
                    <TextField
                        id="outlined-full-width"
                        label="Asunto"
                        style={{ margin: 8 }}
                        placeholder="Ingrese su asunto"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={handleChange}
                        value={mensaje.asunto}
                        name="asunto"
                    />
                </div>
                <div className="my-2">
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
                        value={mensaje.telefono}
                        name="telefono"
                    />
                </div>
                <div className="my-2">
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