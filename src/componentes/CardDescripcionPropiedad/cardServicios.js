import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    }
});
const CardServicios = ({propiedad}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="div" className="precioCasa colorTitle">
                    U$S {propiedad.precio}
                </Typography>
                <Typography variant="body2" component="div" className="text-justify descripcionCasa">
                    <p className="tituloCaracteristica">Superficie:</p>
                    <span className="itemSuperficie"><b>{propiedad.s_terreno} metros cuadrados</b></span>
                    <br/><br/>
                    <p className="tituloCaracteristica">Servicios:</p>
                    <span className="text-muted">Agua: 
                            <b>
                            {(propiedad.agua) ? propiedad.agua : 'No registrado'}
                        </b>
                    </span>
                    <br/>
                    <span className="text-muted">Luz: 
                            <b>
                            {(propiedad.luz) ? propiedad.luz : 'No registrado'}
                        </b>
                    </span>
                    <br/>
                    <span className="text-muted">Calefacción: 
                            <b>
                            {(propiedad.calefaccion) ? propiedad.calefaccion : 'No registrado'}
                        </b>
                    </span>
                    <br/>
                    <span className="text-muted">Gas: 
                            <b>
                            {(propiedad.gas) ? propiedad.gas : 'No registrado'}
                        </b>
                    </span>
                    <br/>
                    <span className="text-muted">Internet: 
                            <b>
                            {(propiedad.internet) ? propiedad.internet : 'No registrado'}
                        </b>
                    </span>
                    <br/>
                    <span className="text-muted">Telefono: 
                            <b>
                            {(propiedad.telefono) ? propiedad.telefono : 'No registrado'}
                        </b>
                    </span>
                    <br/>
                    {(propiedad.idCategoria==3)?null:
                    <>
                        <span className="text-muted">Dormitorios: <b>{propiedad.dormitorios}</b></span>
                        <br/>
                        <span className="text-muted">Cochera: <b>{propiedad.cochera}</b></span>
                        <br/>
                        <span className="text-muted">Pileta: <b>{propiedad.pileta}</b></span>
                    </>
                    }
                </Typography>
            </CardContent>
        </Card>
    );
}
 
export default CardServicios;