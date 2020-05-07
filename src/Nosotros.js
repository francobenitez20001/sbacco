import React, {Fragment} from 'react';
import SliderGeneral from './componentes/SliderGeneral/SliderGeneral';
import Mapa from './componentes/Mapa/Mapa';

import './Nosotros.css';

const Nosotros = () => {
    return (
        <Fragment>
            <SliderGeneral seccion="Nosotros"/>
            <div className="container-nosotros animated fadeIn fast mt-4">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <p id="tituloPropiedadesSeccionNosotros">Quiénes sómos</p>
                        <div className="col-12 subrayado-animado"></div>
                        <p className="descripcion text-justify mt-4">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum cumque modi aliquid qui odit, harum aperiam delectus vel. Adipisci aperiam iure fugiat modi eius possimus recusandae nostrum! Sapiente sit cum numquam nihil architecto totam asperiores ex officia alias! Odit, sunt vel. Veritatis in distinctio aliquid consequuntur reprehenderit? Nam quasi magni, corporis eum cupiditate exercitationem provident magnam saepe accusamus unde atque necessitatibus rerum veniam sapiente a labore obcaecati nobis in at quos quod recusandae voluptas dolore. Illo vero esse doloribus. Quaerat minima a quod repellendus similique ab perspiciatis voluptatibus molestias harum optio, dolorum laborum. Qui iure error nulla quod ut repellat.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum cumque modi aliquid qui odit, harum aperiam delectus vel. Adipisci aperiam iure fugiat modi eius possimus recusandae nostrum! Sapiente sit cum numquam nihil architecto totam asperiores ex officia alias! Odit, sunt vel. Veritatis in distinctio aliquid consequuntur reprehenderit? Nam quasi magni, corporis eum cupiditate exercitationem provident magnam saepe accusamus unde atque necessitatibus rerum veniam sapiente a labore obcaecati nobis in at quos quod recusandae voluptas dolore. Illo vero esse doloribus. Quaerat minima a quod repellendus similique ab perspiciatis voluptatibus molestias harum optio, dolorum laborum. Qui iure error nulla quod ut repellat.
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