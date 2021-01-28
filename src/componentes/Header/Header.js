import React,{Fragment,useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import LoaderFullWidth from '../Loader/LoaderFullWidth';
import {connect} from 'react-redux';
import * as contactoActions from '../../actions/contactoActions';
import './Header.css';

const toggleMenu = ()=>{
    document.getElementById('navbarSupportedContent').classList.toggle('showw');
}

window.onscroll = ()=>{
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;

    // Realizamos alguna accion cuando el scroll sea mayor a 100
    if (scroll>100) {
        if(document.getElementsByClassName('navbar')[0]){
            document.getElementsByClassName('navbar')[0].classList.add('scroll');
            for(let i = 0; i<document.getElementsByClassName('nav-link').length;i++){
                document.getElementsByClassName('nav-link')[i].classList.add('color-black');
            }
            document.getElementById('botonMenu').style.color='#c41c42';
        }
    }else{
        for(let i = 0; i<document.getElementsByClassName('nav-link').length;i++){
            document.getElementsByClassName('nav-link')[i].classList.remove('color-black');
        }
        document.getElementById('botonMenu').style.color='black';
        document.getElementsByClassName('navbar')[0].classList.remove('scroll');
    }
}


const Header = (props) => {

    useEffect(() => {
        getData();
    }, [])

    const getData = ()=>{
        if(!props.info){
            props.getInfo();
        }
    }
    
    return (
        (!props.info)?<LoaderFullWidth/>:
        <Fragment>
            <div className="menu-contacto-info d-xs-none d-sm-none d-md-block">
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <span className="info-menu-contacto ml-5 mr-4">Oficina central en Parada Robles</span>
                            <i className=" ml-4 mr-2 fa fa-phone-alt"></i>
                            <span className="info-menu-contacto">{props.info.telefonoPrincipal}</span>
                            <i className=" ml-4 mr-2 fab fa-whatsapp"></i>
                            <span className="info-menu-contacto">{props.info.whatsapp}</span>
                        </div>
                        <div className="col-3 text-center redes">
                            <a target="blank" style={{color:'white'}} href={props.info.facebook}>
                                <i className="icon-social-menu fab fa-facebook-f"></i>
                            </a>
                            <a target="blank" style={{color:'white'}} href={props.info.instagram}>
                                <i className="icon-social-menu fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar sticky-top navbar-expand-lg">
                <Link className="navbar-brand logo" to="/">
                    <img src="http://104.197.241.81/imagenes/logo.png" alt="logo" />
                </Link>
                <i onClick={toggleMenu} className="fas fa-bars" id="botonMenu"></i>

                <div className="collapse navbar-collapse animate fadeIn fast" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Inicio <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/nosotros">Quiénes Somos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/propiedades">Propiedades</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
}

const mapStateToProps = ({contactoReducer})=>contactoReducer;
 
export default connect(mapStateToProps,contactoActions)(Header);