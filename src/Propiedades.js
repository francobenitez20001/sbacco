import React, {Fragment, useState, useEffect} from 'react';
import SliderGeneral from './componentes/SliderGeneral/SliderGeneral';
import Producto from './componentes/Producto/Producto';
import Filtro from './componentes/Filtro/Filtro';
import Footer from './componentes/Footer/Footer';
import {API} from './config';
import LoaderFullWidth from './componentes/Loader/LoaderFullWidth';
import './Propiedades.css';

const Propiedades = () => {
    const [propiedades, setPropiedades] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [filtrados, setFiltrados] = useState([]);

    useEffect(() => {
        getPropiedades();
    }, []);

    const getPropiedades = ()=>{
        return fetch(`${API}/listar_inmuebles/6/normal`).then(res=>res.json()).then(data=>{
            setPropiedades(data.data);
            setLoading(false);
        })
    }

    return (
        (loading)?<LoaderFullWidth/>:
        <Fragment>
            <SliderGeneral seccion="Propiedades"/>
            <div className="container">
                <div className="row">
                    {
                        propiedades.map(propiedad=>(
                            <div key={propiedad.id} className="col-12 col-md-4 mb-3">
                                <Producto
                                    propiedad={propiedad}/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Filtro setPropiedades={setPropiedades}/>
            <Footer/>
        </Fragment>
    );
}
 
export default Propiedades;