import React, {Fragment, useState, useEffect} from 'react';
import SliderGeneral from './componentes/SliderGeneral/SliderGeneral';
import Producto from './componentes/Producto/Producto';
import Filtro from './componentes/Filtro/Filtro';

import './Propiedades.css';

const Propiedades = () => {
    const [propiedades, setPropiedades] = useState([]);
    // const [filtrados, setFiltrados] = useState([]);

    useEffect(() => {
        const getData = ()=>{
            fetch('http://104.197.241.81:3000/listar_inmuebles/6/normal').then(res=>res.json()).then(data=>{
                setPropiedades(data.data);
            })
        } 
        getData();
    }, [])

    return (
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
        </Fragment>
    );
}
 
export default Propiedades;