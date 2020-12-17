import React,{Fragment,useEffect,useState} from 'react';
import { useParams } from "react-router-dom";
import SliderGeneral from './componentes/SliderGeneral/SliderGeneral';
import FormContacto from './componentes/FormContacto/FormContacto';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './PropiedadDetalle.css';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});

const PropiedadDetalle = () => {

    const [propiedad, setPropiedad] = useState([]);
    const [imagenes, setImagenes] = useState([]);
    let { id } = useParams();
    // console.log(id);

    useEffect(() => {
        const getData = ()=>{
            fetch(`http://104.197.241.81:3000/detallar_inmueble_id/${id}`).then(res=>res.json()).then(data=>{
                setPropiedad(data.data);
                setImagenes(data.imagenes);
            })
        }
        getData();
    }, [])

    const handleClickImagenIndividual = event =>{
        document.getElementsByName('img-modal')[0].src = event.target.src
    }


    const classes = useStyles();
    let mensaje = '';
    return (
        <Fragment>
            <SliderGeneral seccion="Propiedad en detalle"/>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 col-md-10">
                        <div id="carouselExampleIndicators" className="carousel slide carousel-propiedad" data-ride="carousel">
                            <ol className="carousel-indicators">
                                {imagenes.map(img=>(
                                    (img.header === 1) ? 
                                        <li key={img.id} data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    :
                                    <li key={img.id} data-target="#carouselExampleIndicators" data-slide-to={img.id + 1}></li>
                                ))}
                            </ol>
                            <div className="carousel-inner">
                                {imagenes.map(img=>(
                                    (img.header === 1) ? 
                                        <div key={img.id} className="carousel-item active">
                                            <img className="" src={`${img.nombre}`} alt="First slide"/>
                                        </div>
                                    :
                                        <div key={img.id} className="carousel-item">
                                            <img className="" src={`${img.nombre}`} alt="Second slide"/>
                                        </div>
                                ))}
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-2 muestraImagenes">
                        {imagenes.map(img=>(
                            <img key={img.id} onClick={handleClickImagenIndividual} data-toggle="modal" data-target=".bd-example-modal-lg" src={`${img.nombre}`} className="img-fluid mb-2" alt="casa"/>
                        ))}
                    </div>
                </div>


                {/* descripcion */}
                
                <div className="row mt-5">
                    <div className="col-12">
                        {propiedad.map(datos=>(
                            <div key={datos.id} className="row">
                                <div className="col-12 col-md-8 cont-caja">
                                    <Card className={classes.root}>
                                        <CardContent>
                                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                {datos.operacion}
                                            </Typography>
                                            <Typography variant="h5" component="div" className="colorTitle">
                                                {datos.categoria} - {datos.localidad}
                                            </Typography>
                                            <Typography variant="body2" component="div" className="text-justify descripcionCasa">
                                                {datos.descripcion}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="col-12 col-md-4 cont-caja">
                                    <Card className={classes.root}>
                                        <CardContent>
                                            <Typography variant="h5" component="div" className="precioCasa colorTitle">
                                                U$S {datos.precio}
                                            </Typography>
                                            <Typography variant="body2" component="div" className="text-justify descripcionCasa">
                                                <p className="tituloCaracteristica">Superficie:</p>
                                                <span className="itemSuperficie"><b>{datos.s_terreno} metros cuadrados</b></span>
                                                <br/><br/>
                                                <p className="tituloCaracteristica">Servicios:</p>
                                                <span className="text-muted">Agua: 
                                                     <b>
                                                        {(datos.agua) ? datos.agua : 'No registrado'}
                                                    </b>
                                                </span>
                                                <br/>
                                                <span className="text-muted">Luz: 
                                                     <b>
                                                        {(datos.luz) ? datos.luz : 'No registrado'}
                                                    </b>
                                                </span>
                                                <br/>
                                                <span className="text-muted">Calefacción: 
                                                     <b>
                                                        {(datos.calefaccion) ? datos.calefaccion : 'No registrado'}
                                                    </b>
                                                </span>
                                                <br/>
                                                <span className="text-muted">Gas: 
                                                     <b>
                                                        {(datos.gas) ? datos.gas : 'No registrado'}
                                                    </b>
                                                </span>
                                                <br/>
                                                <span className="text-muted">Internet: 
                                                     <b>
                                                        {(datos.internet) ? datos.internet : 'No registrado'}
                                                    </b>
                                                </span>
                                                <br/>
                                                <span className="text-muted">Telefono: 
                                                     <b>
                                                        {(datos.telefono) ? datos.telefono : 'No registrado'}
                                                    </b>
                                                </span>
                                                <br/>
                                                <span className="text-muted">Dormitorios: <b>{datos.dormitorios}</b></span>
                                                <br/>
                                                <span className="text-muted">Cochera: <b>{datos.cochera}</b></span>
                                                <br/>
                                                <span className="text-muted">Pileta: <b>{datos.pileta}</b></span>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <FormContacto titulo="Consultar por esta propiedad"/>
            </div>

            <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <img src="" name="img-modal" className="img-fluid" alt="casa"/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default PropiedadDetalle;
