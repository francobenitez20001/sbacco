import React, {useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Slider.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        flexGrow: 1,
        height: 'calc(100vh - 104px)',
        position: 'relative'
    },
    img: {
        height: 'calc(100vh - 104px)',
        width:'100%',
        display: 'block',
        overflow: 'hidden',
        objectFit:'cover'
    },
    caption:{
        position:'absolute',
        top:'40%',
        fontFamily: 'AgencyFb',
        color: 'white',
        width: '100%',
        textAlign:'center',
        textTransform:'uppercase'
    },
    titulo:{
        fontSize:70,
    },
    subtitulo:{
        fontSize:30
    }
}));

const imagenes = [
    {
        id:1,
        nombre:"https://storage.googleapis.com/asbaccopropiedades/banner.jpg"
    },
    {
        id:2,
        nombre:"https://storage.googleapis.com/asbaccopropiedades/campo-3.jpg"
    }
]

const Slider = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div className={classes.root}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {imagenes.map((step, index) => (
                <div key={step.id}>
                    {Math.abs(activeStep - index) <= 2 ? (
                    <LazyLoadImage effect="blur" src={step.nombre} alt={step.nombre} className={classes.img}/>
                    ) : null}
                </div>
                ))}
            </AutoPlaySwipeableViews>
            <div className={classes.caption}>
                <h2 className={classes.titulo}>Angela Sbacco</h2>
                <h3 className={classes.subtitulo}>Propiedades</h3>
            </div>
        </div>
    );
}
 
export default Slider;