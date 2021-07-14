import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      flexGrow: 1,
    },
    img: {
      height: 600,
      display: 'block',
        width:'100%',
        objectFit:'cover',
      overflow: 'hidden',
    },
}));

const CarouselProductos = ({imagenes}) => {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = imagenes.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

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
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                    Siguiente
                    {theme.direction === 'rtl' ? <i className="fas fa-arrow-left"></i> : <i className="fas fa-arrow-right"></i>}
                </Button>
                }
                backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <i className="fas fa-arrow-right"></i> : <i className="fas fa-arrow-left"></i>}
                    Anterior
                </Button>
                }
            />
        </div>
    );
}
 
export default CarouselProductos;