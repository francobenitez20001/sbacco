import React, {Fragment} from 'react';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import TextField from '@material-ui/core/TextField';

import './FormContacto.css';

const MySwal = withReactContent(Swal);

const FormContacto = ({titulo}) => {

    const [mensaje, setMensaje] = React.useState({
        nombre:'',
        apellido:'',
        email:'',
        celular:'',
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
        if (mensaje.nombre.trim() === '' || mensaje.apellido.trim() === '' || mensaje.email.trim() === '' || mensaje.celular.trim() === '' || mensaje.mensaje.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
            MySwal.fire({
                title: <p>Mensaje enviado</p>,
                footer: 'Copyright 2018',
                onOpen: () => {
                  MySwal.clickConfirm()
                }
            }).then(() => {
                return MySwal.fire(<p>Mensaje enviado</p>)
            });
            setMensaje({
                nombre:'',
                apellido:'',
                email:'',
                celular:'',
                mensaje:''
            });
        }, 3000);
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
                        <TextField id="standard-basic" onChange={handleChange} value={mensaje.celular} name="celular" className="w-100" label="Celular" />
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