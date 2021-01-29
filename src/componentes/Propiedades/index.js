import React,{useEffect} from 'react';
import { connect } from "react-redux";
import * as propiedadesActions from '../../actions/propiedadesActions';
import Producto from '../Producto/Producto';

const Propiedades = (props) => {
    useEffect(() => {
        const {propiedades} = props;
        if(propiedades.length===0){
            props.getPropiedades();
        }
    }, []);
    return (
        <div className="row">
            {
                (props.propiedades.length===0 || !props.propiedades)?
                <div className="alert alert-warning text-center col-12">Sin propiedades</div>
                :
                props.propiedades.map(propiedad=>(
                    <div key={propiedad.id} className="col-12 col-md-4 mb-3">
                        <Producto
                            propiedad={propiedad}/>
                    </div>
                ))
            }
        </div>
    );
}

const mapStateToProps = ({propiedadesReducer})=>propiedadesReducer;
 
export default connect(mapStateToProps,propiedadesActions)(Propiedades);