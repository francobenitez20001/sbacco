import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import * as contactoActions from '../../actions/contactoActions';
import './index.css';

const CardInfoContacto = (props) => {
    useEffect(() => {
        const {info} = props;
        if(Object.keys(info).length===0){
            props.getInfo();
        }
    }, [])
    const {info} = props;
    return (
        <section className="infoContacto text-center">
            <div className="item-red">
                <i className="icon-red fab fa-facebook d-block"></i>
                <span className="redNombre"><a target="blank" href={`${info.facebook}`}>Angela Sbacco Propiedades</a></span>
            </div>

            <div className="item-red">
                <i className="icon-red fab fa-instagram d-block"></i>
                <span className="redNombre"> <a target="blank" href={`${info.instagram}`}>Angela Sbacco Propiedades</a></span>
            </div>

            <div className="item-red">
                <i className="icon-red fas fa-envelope d-block"></i>
                <span className="redNombre" id="email"> info@asbaccopropiedades.com</span>
            </div>

        </section>
    );
}

const mapStateToProps = ({contactoReducer})=>contactoReducer;

export default connect(mapStateToProps,contactoActions)(CardInfoContacto);