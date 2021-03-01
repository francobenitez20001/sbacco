import React from 'react';
import './index.css';

const NotFoundContent = () => {
    const handleClick = ()=>{
        return window.location.assign('/');
    }
    return ( 
        <div className="notfound__container">
            <h1>404 Error</h1>
            <h4>Ups.. no pudimos encontrar lo que buscas</h4>
            <p>Lo sentimos mucho.</p>
            <button className="btn btn-info" onClick={handleClick}>Ir a página principal</button>
        </div>
    );
}
 
export default NotFoundContent;