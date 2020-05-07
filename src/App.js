import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Home';
import Propiedades from './Propiedades';
import Nosotros from './Nosotros';
import Contacto from "./Contacto";
import PropiedadDetalle from './PropiedadDetalle'


import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';


function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/nosotros" component={Nosotros}/>
          <Route exact path="/propiedades" component={Propiedades}/>
          <Route exact path="/contacto" component={Contacto}/>
          <Route exact path="/propiedad/:id" component={PropiedadDetalle}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
