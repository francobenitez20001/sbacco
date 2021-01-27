import React, {Fragment,useState,useEffect} from 'react';
import SliderGeneral from '../../componentes/SliderGeneral/SliderGeneral';
import Mapa from '../../componentes/Mapa/Mapa';
import LoaderFullWidth from '../../componentes/Loader/LoaderFullWidth';
import {API} from '../../config';

import './Nosotros.css';

const Nosotros = () => {
    const [nosotros, setNosotros] = useState(undefined);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getData();
    }, [])

    const getData = ()=>{
        return fetch(`${API}/nosotros`).then(res=>res.json()).then(res=>{
            setNosotros(res.data[0]);
            setLoading(false);
        })
    }

    return (
        (loading)?<LoaderFullWidth/>:
        <Fragment>
            <SliderGeneral seccion="Nosotros"/>
            <div className="container-nosotros animated fadeIn fast mt-4">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <p id="tituloPropiedadesSeccionNosotros">Quiénes sómos</p>
                        <div className="col-12 subrayado-animado"></div>
                        <p className="descripcion text-justify mt-4" style={{whiteSpace:'pre-line'}}>
                            {nosotros.contenido}
                        </p>
                    </div>
                    <div className="col-12 col-md-6">
                        <Mapa/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Nosotros;