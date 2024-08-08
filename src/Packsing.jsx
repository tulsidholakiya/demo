import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Packsing = () => {
    return(
        <>
            <div className="Login-main">
                <div className="container">
                    <div className="Login-inner">
                        <div className="hed-title">
                            <h2>Packages </h2>
                            <ul>
                                <li><Link to="/">home</Link></li>
                                <span><MdKeyboardDoubleArrowRight /></span>
                                <li className="active"> Luxury Planes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Packsing;