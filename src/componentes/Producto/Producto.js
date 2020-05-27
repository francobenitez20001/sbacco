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
    },
  });

const Producto = ({propiedad}) => {
    const classes = useStyles();
    let imagen = `http://104.197.241.81/imagenes/${propiedad.header}`;
    let descripcion = propiedad.descripcion;
    if (descripcion.length>490) {
        descripcion = propiedad.descripcion.substr(0,490)+'...';
    }
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className="avatar">
                    <i className="fas fa-map-marker-alt"></i>
                </Avatar>
                }
                title={propiedad.partido}
                subheader={propiedad.localidad}
            />
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
                <span size="small" color="primary" id="txtDimension">
                    {propiedad.s_terreno} Metros Cuadrados
                </span>
            </CardActions>
        </Card>
    );
}
 
export default Producto;