import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    media: {
        height: 140,
        width: '100%',
        objectFit:'cover'
    }
});

const Imagen = (props) => {
    const classes = useStyles();
    return (
        <img
            className={classes.media}
            src={props.src}
            alt={props.alt}
        />
    );
}
 
export default Imagen;