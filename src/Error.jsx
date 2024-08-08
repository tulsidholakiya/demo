import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { TiHomeOutline } from "react-icons/ti";
import Subscribe from "./Subscribe";

const Error = () => {
    return(
        <>
            <div className="Login-main">
                <div className="container">
                    <div className="Login-inner">
                        <div className="hed-title">
                            <h2>404 Error</h2>
                            <ul>
                                <li><Link to="/">home</Link></li>
                                <span><MdKeyboardDoubleArrowRight /></span>
                                <li className="active"> 404 Error</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="error-main">
                <div className="container">
                    <div className="error-inner">
                        <div className="error-wrapper">
                            <h1>4 <span> 0 </span> 4</h1>
                            <h2>Opos... Page Not Found!</h2>
                            <p>The page you looking for not found may be it not exist or removed.</p>
                            <Link to="/" className="theme-btn"> <span><TiHomeOutline /></span> Go Back Home</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Subscribe/>
        </>
    );
}
export default Error;