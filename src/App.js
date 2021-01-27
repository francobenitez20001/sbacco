import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home/Home.js';
import Propiedades from './pages/Propiedades/Propiedades.js';
import Nosotros from './pages/Nosotros/Nosotros';
import Contacto from "./pages/Contacto/Contacto";
import PropiedadDetalle from './pages/Propiedad/PropiedadDetalle'

import Layout from './componentes/Layout';
import NotFound from './componentes/NotFound/NotFound';


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
          <Route component={NotFound}/>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
