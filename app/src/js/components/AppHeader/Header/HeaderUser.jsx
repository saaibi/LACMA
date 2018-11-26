import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import background from "../../../../../public/images/office.jpg";
import profile from "../../../../../public/images/yuna.jpg";

const HeaderUser = ({ menu }) => {
    if (menu === "sidenav") {
        return (
            <ul id="slide-out" className="sidenav">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src={background} />
                        </div>
                        <Link to="/"><img className="circle" src={profile} /></Link>
                        <a href="#name"><span className="white-text name">Saaibi Florez</span></a>
                        <a href="#email"><span className="white-text email">saaibiflorezhernandez@gmail.com</span></a>
                    </div>
                </li>
                <li><Link to="/samples" className="waves-effect" ><i className="material-icons">content_paste</i>Muestras</Link></li>
                <li><Link to="/clients" className="waves-effect" ><i className="material-icons">business_center</i>Clientes</Link></li>
                <li><Link to="/results"><i className="material-icons">poll</i>Resultados</Link></li>
                <li><Link to="/users"><i className="material-icons">group</i>Usuarios</Link></li>
                <li><Link to="/products"><i className="material-icons">card_travel</i>Productos</Link></li>
                <li><Link to="/login"><i className="material-icons">system_update_alt</i>Logout</Link></li>
            </ul>
        )
    }
    if (menu === "nav") {
        return (
            < ul className="right hide-on-med-and-down" >
                <li><Link to="/clients">Clients</Link></li>
                <li><a className="dropdown-trigger" href="#!" data-target="dropdown2">Muestras<i className="material-icons right">arrow_drop_down</i></a></li>
                <li><Link to="/results">Resultados</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/login">Logout</Link></li>
            </ul >
        );
    }

};

HeaderUser.defaultProps = {
};

HeaderUser.propTypes = {
    menu: PropTypes.oneOf(['nav', 'sidenav'])
};

export default HeaderUser;
