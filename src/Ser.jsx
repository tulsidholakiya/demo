import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Services from "./Services";
import Subscribe from "./Subscribe";


const Ser =()=>{
    return(
        <>
            <div className="ser-main">
                <div className="container">
                    <div className="ser-inner">
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
            <Services/>
            <Subscribe/>
        </>
    )
}
export default Ser;