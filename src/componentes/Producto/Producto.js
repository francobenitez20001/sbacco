import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Producto.css';

const useStyles = makeStyles({
    media: {
      height: 140,
      width: '100%',
      objectFit:'cover'
    },
    avatar: {
        backgroundColor: red[500],
    },
    progress: {
       textAlign:'center'
    }
  });

const Producto = ({propiedad}) => {
    const classes = useStyles();
    const [load, setLoad] = useState(false);

    let imagen = `${propiedad.header}`;
    let descripcion = propiedad.descripcion;
    if (descripcion.length>300) {
        descripcion = propiedad.descripcion.substr(0,200)+'...';
    }
    
    const verPropiedad = id=>{
        window.location.assign(`/propiedad/${id}`);
    }

    const handleLoad = e => {
        setLoad(true);
    }
    
    return (
        <Card className={classes.root + 'animated fadeIn fast'} onClick={()=>verPropiedad(propiedad.id)}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className="avatar">
                    <i className="fas fa-map-marker-alt"></i>
                </Avatar>
                }
                title={propiedad.localidad}
                subheader={propiedad.barrio}  
            />
            {(propiedad.mostrarEstado==='no')?null:<span className="labelEstado">{propiedad.estado}</span>}
            <CardActionArea>
                <LazyLoadImage
                    height={140}
                    width="100%"
                    src={imagen}
                    alt={descripcion}
                    style={{objectFit:'cover'}}
                    effect="blur"
                />
                {/* { !load ? <div className={classes.progress}><CircularProgress color="secondary" /></div> : null } */}
                <CardContent>   
                    <Typography gutterBottom variant="h5" component="h2">
                        
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {descripcion}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className="card-actions">
                <Link to={{pathname: `/propiedad/${propiedad.id}`}}>
                    <Button size="small" className="btnCard">
                        Ver Más
                    </Button>
                </Link>
                <span>
                    <span size="small" color="primary" id="txtDimension" className="d-block">
                        Sup. cubierta: <b>{propiedad.s_cubierta} m2.</b>
                    </span>
                    <span size="small" color="primary" id="txtDimension">
                        Sup. total: <b>{propiedad.s_total || '0'} {(propiedad.u_medida==='hectareas')?'Hec.':'m2.'}</b>
                    </span>
                </span>
            </CardActions>
        </Card>
    );
}
 
export default Producto;
