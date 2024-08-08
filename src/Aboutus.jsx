import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import About from "./About";
import Counter from "./Counter";
import Team from "./Team";
import Testimonials from "./Testimonials";
import Partners from "./Partners";
import Subscribe from "./Subscribe";

const Aboutus = () =>{
    return(
        <>
            <div className="contactus-main">
                <div className="container">
                    <div className="contactus-inner">
                        <div className="hed-title">
                            <h2>about Us</h2>
                            <ul>
                                <li><Link to="/">home</Link></li>
                                <span><MdKeyboardDoubleArrowRight /></span>
                                <li className="active"> about us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <About/>
            <Counter/>
            <Team/>
            <Testimonials/>
            <Partners/>
            <Subscribe/>
        </>
    )
}
export default Aboutus;