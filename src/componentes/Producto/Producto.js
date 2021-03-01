import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

import './Producto.css';

const useStyles = makeStyles({
    media: {
      height: 140,
    },
    avatar: {
        backgroundColor: red[500],
    }
  });

const Producto = ({propiedad}) => {
    const classes = useStyles();
    let imagen = `${propiedad.header}`;
    let descripcion = propiedad.descripcion;
    if (descripcion.length>300) {
        descripcion = propiedad.descripcion.substr(0,200)+'...';
    }
    
    const verPropiedad = id=>{
        window.location.assign(`/propiedad/${id}`);
    }
    
    return (
        <Card className={classes.root} onClick={()=>verPropiedad(propiedad.id)}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className="avatar">
                    <i className="fas fa-map-marker-alt"></i>
                </Avatar>
                }
                title={propiedad.partido}
                subheader={propiedad.barrio}  
            />
            {(propiedad.mostrarEstado=='no')?null:<span className="labelEstado">{propiedad.estado}</span>}
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={imagen}
                title="Contemplative Reptile"
                />
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
                        Sup. total: <b>{propiedad.s_total || '0'} {(propiedad.u_medida=='hectareas')?'Hec.':'m2.'}</b>
                    </span>
                </span>
            </CardActions>
        </Card>
    );
}
 
export default Producto;
