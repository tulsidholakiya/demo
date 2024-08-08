import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";


const Singleser = () => {
    return(
        <>
            <div className="Singleser-main">
                <div className="container">
                    <div className="Singleser-inner">
                        <div className="hed-title">
                            <h2>Services</h2>
                            <ul>
                                <li><Link to="/">home</Link></li>
                                <span><MdKeyboardDoubleArrowRight /></span>
                                <li className="active"> Services</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}
export default Singleser;