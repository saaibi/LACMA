import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

import HeaderNoUser from './HeaderNoUser'
import HeaderUser from './HeaderUser'
class Header extends Component {
    componentDidMount(){
        $(".dropdown-trigger").dropdown();
    }
    componentDidUpdate(){
        $(".dropdown-trigger").dropdown();
    }
    componentWillMount(){
        $(".dropdown-trigger").dropdown();
    }
    render() {
        const { name, isLoggedIn } = this.props
        return (
            <div>
                <ul id="dropdown2" className="dropdown-content">
                    <li><Link to="/viewsamples">Ver</Link></li>
                    <li className="divider"></li>
                    <li><Link to="/samples">Crear</Link></li>
                </ul>
                <nav className="">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">{name}</Link>
                        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        {isLoggedIn ? <HeaderUser menu="nav" /> : <HeaderNoUser menu="nav" />}
                    </div>
                </nav>
                <p></p>
                {isLoggedIn ? <HeaderUser menu="sidenav" /> : <HeaderNoUser menu="sidenav" />}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.authentication.loggedIn,
    };
};

export default connect(mapStateToProps)(Header);
