import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Loader.css';

const LoaderFullWidth = () => {
    return (
        <div id="LoaderFullWidth">
            <CircularProgress color="secondary" className="loader-full" />
            <p className="text-center">Obteniendo resultados...</p>
        </div>
    );
}
 
export default LoaderFullWidth;