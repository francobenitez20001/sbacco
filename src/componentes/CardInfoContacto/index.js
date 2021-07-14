import React from 'react';
import {connect} from 'react-redux';
import './index.css';

const CardInfoContacto = (props) => {
    const {info:{facebook,instagram}} = props;
    return (
        <section className="infoContacto text-center">
            <div className="item-red">
                <i className="icon-red fab fa-facebook d-block"></i>
                <span className="redNombre"><a target="blank" href={facebook}>Angela Sbacco Propiedades</a></span>
            </div>

            <div className="item-red">
                <i className="icon-red fab fa-instagram d-block"></i>
                <span className="redNombre"> <a target="blank" href={instagram}>Angela Sbacco Propiedades</a></span>
            </div>

            <div className="item-red">
                <i className="icon-red fas fa-envelope d-block"></i>
                <span className="redNombre" id="email"> info@asbaccopropiedades.com</span>
            </div>

        </section>
    );
}

const mapStateToProps = ({contactoReducer})=>contactoReducer;

export default connect(mapStateToProps,{})(CardInfoContacto);