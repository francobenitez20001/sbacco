import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    }
});

const CardDescripcion = ({propiedad}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {propiedad.operacion}
                </Typography>
                <Typography variant="h5" component="div" className="colorTitle">
                    {propiedad.categoria} - {propiedad.localidad}
                </Typography>
                <Typography variant="body2" component="div" style={{whiteSpace:`pre-line`}} className="text-justify descripcionCasa">
                    {propiedad.descripcion}
                </Typography>
            </CardContent>
        </Card>
    );
}
 
export default CardDescripcion;