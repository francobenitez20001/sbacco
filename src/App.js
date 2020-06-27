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

import Footer from './componentes/Footer/Footer';

import Layout from './componentes/Layout';


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/nosotros" component={Nosotros}/>
          <Route exact path="/propiedades" component={Propiedades}/>
          <Route exact path="/contacto" component={Contacto}/>
          <Route exact path="/propiedad/:id" component={PropiedadDetalle}/>
        </Switch>
        <Footer/>
      </Layout>
    </Router>
  );
}

export default App;
