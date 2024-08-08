import React from "react";
import { GoChevronDown,GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom"; 

const Header = () => {
    return(
        <>
            <div className="main-navigation">
                <div className="container">
                    <div className="inner-main">
                        <div className="navbar-brand">
                            <Link className="navbar" to="/">
                                <img src="assest/image/logo.png"></img>
                            </Link>
                            <div className="main-navbar">
                                <ul className="navbar-flex">
                                    <li className="nav-item-dropdown">
                                            <Link to="/">home <span><GoChevronDown /></span></Link>
                                        <ul className="hide">
                                            <li><Link to="/">Homepage 01</Link></li>
                                            <li><Link to="/home2">Homepage 02</Link></li>
                                            <li><Link to="/home3">Homepage 03</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/">about</Link>
                                    </li>
                                    <li className="nav-item-dropdown">
                                            <Link to="/">planes <span><GoChevronDown /></span></Link>
                                        <ul className="hide">
                                            <li><Link to="/plane1">plane one</Link></li>
                                            <li><Link to="/plane2">plane two</Link></li>
                                            <li><Link to="/plane3">plane search</Link></li>
                                            <li><Link to="/plane4">plane book</Link></li>
                                            <li><Link to="/plane5">plane single</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item-dropdown"><Link to="/">pages <span><GoChevronDown /></span></Link>
                                        <ul className="hide">
                                            <li><Link className="dropdown-item" to="/aboutus">about us</Link></li>
                                            <li className="dropdown-submenu">
                                                    <Link className="dropdown-item" to="/">package <span><GoChevronRight /></span> </Link>
                                                <ul className="dropdown-menu-show">
                                                    <li><Link className="dropdown-item" to="/pack">package</Link></li>
                                                    <li><Link className="dropdown-item" to="/packsing">package single</Link></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu">
                                                    <Link className="dropdown-item" to="/">team <span><GoChevronRight /></span></Link>
                                                <ul className="dropdown-menu-show">
                                                    <li><Link className="dropdown-item" to="/">team</Link></li>
                                                    <li><Link className="dropdown-item" to="/">team single</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/" className="dropdown-item">Testimonials</Link></li>
                                            <li><Link to="/" className="dropdown-item">contact us</Link></li>
                                            <li><Link to="/" className="dropdown-item">faq</Link></li>
                                            <li className="dropdown-submenu">
                                                    <Link className="dropdown-item" to="/">account page  <span><GoChevronRight /></span></Link>
                                                <ul className="dropdown-menu-show">
                                                    <li><Link className="dropdown-item" to="/login">login</Link></li>
                                                    <li><Link className="dropdown-item" to="/register">register</Link></li>
                                                    <li><Link className="dropdown-item" to="/forpass">forget password</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/error" className="dropdown-item">404 error</Link></li>
                                            <li><Link to="/" className="dropdown-item">coming soon</Link></li>
                                            <li><Link to="/tos" className="dropdown-item">terms of service</Link></li>
                                            <li><Link to="/" className="dropdown-item">Privacy Policy</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item-dropdown"><Link to="/">service <span><GoChevronDown /></span></Link>
                                        <ul className="hide">
                                            <li><Link  to="/service">service </Link></li>
                                            <li><Link  to="/singelser">service single</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item-dropdown"><Link to="/"> blog <span><GoChevronDown /></span></Link>
                                        <ul className="hide">
                                            <li><Link to="/">blog</Link></li>
                                            <li><Link to="/">blog single</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/">contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}
export default Header;