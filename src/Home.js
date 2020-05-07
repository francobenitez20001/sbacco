import React,{useEffect,useState} from 'react';
import './App.css';

import Slider from './componentes/Slider/Slider'
import Producto from './componentes/Producto/Producto';
import Filtro from './componentes/Filtro/Filtro';
import FormContacto from './componentes/FormContacto/FormContacto';
import Mapa from './componentes/Mapa/Mapa';


const Home = () => {
    const [propiedades, setPropiedades] = useState([]);

    useEffect(() => {
      const getData = ()=>{
        fetch('http://104.197.241.81:3000/listar_inmuebles/6/normal').then(res=>res.json()).then(propiedadess=>{
            setPropiedades(propiedadess.data);
        });
      }
      getData();      
    },[]);

    return (
        <div className="App">
            <Slider/>
            <div className="container">
                <h2 id="tituloPropiedadesSeccion" className="mb-4">Ultimas <span>Propiedades</span></h2>
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
        </div>
    );
}
 
export default Home;