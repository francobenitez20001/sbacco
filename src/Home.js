import React,{useEffect,useState} from 'react';
import './App.css';

import Slider from './componentes/Slider/Slider'
import Producto from './componentes/Producto/Producto';
import Filtro from './componentes/Filtro/Filtro';
import FormContacto from './componentes/FormContacto/FormContacto';
import Mapa from './componentes/Mapa/Mapa';
import LoaderFullWidth from './componentes/Loader/LoaderFullWidth';
import Footer from './componentes/Footer/Footer';
import {API} from './config';

const Home = () => {
    const [propiedades, setPropiedades] = useState(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPropiedades();      
    },[]);
    
    const getPropiedades = async()=>{
        return fetch(`${API}/listar_inmuebles/6/normal`).then(res=>res.json()).then(propiedadess=>{
            setPropiedades(propiedadess.data);
            setLoading(false);
        });
    }

    return (
        (loading)?<LoaderFullWidth/>:
        <div className="App">
            <Slider/>
            <div className="container">
                <h2 id="tituloPropiedadesSeccion" className="mb-4">Ultimas <span>Propiedades</span></h2>
                <div className="row">
                    {
                        (propiedades)?
                        propiedades.map(propiedad=>(
                            <div key={propiedad.id} className="col-12 col-md-4 mb-3">
                                <Producto
                                    propiedad={propiedad}/>
                            </div>
                        )):<div className="alert alert-warning text-center col-12">Sin propiedades</div>
                    }
                </div>
            </div>
            <Filtro setPropiedades={setPropiedades}/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-7">
                    <Mapa/>
                    </div>
                    <div className="col-12 col-md-5">
                    <FormContacto/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
 
export default Home;