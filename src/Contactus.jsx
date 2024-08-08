import React from "react";
import { Link } from "react-router-dom"; 
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoLocationOutline,IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import Subscribe from "./Subscribe";

const Contactus = () =>{
    return(
        <>
            <div className="contactus-main">
                <div className="container">
                    <div className="contactus-inner">
                        <div className="hed-title">
                            <h2>Contact Us</h2>
                            <ul>
                                <li><Link to="/">home</Link></li>
                                <span><MdKeyboardDoubleArrowRight /></span>
                                <li className="active"> contact us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-area">
                <div className="container">
                    <div className="contact-inner">
                        <div className="contact-row">
                            <div className="col-contact">
                                <div className="contact-info">
                                    <span><IoLocationOutline /></span>
                                    <h5>office address</h5>
                                    <p>15/B Road, New York, USA</p>
                                </div>
                            </div>
                            <div className="col-contact">
                                <div className="contact-info">
                                    <span><IoCallOutline /></span>
                                    <h5>call us</h5>
                                    <p>+2 123 4566 789</p>
                                </div>
                            </div>
                            <div className="col-contact">
                                <div className="contact-info">
                                    <span><CiMail /></span>
                                    <h5>email  us</h5>
                                    <p>info@example.com</p>
                                </div>
                            </div>
                            <div className="col-contact">
                                <div className="contact-info">
                                    <span><MdOutlineWatchLater /></span>
                                    <h5>office open</h5>
                                    <p>Sun - Fri (10AM - 08PM)</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-wrapper">
                            <div className="row">
                                <div className="col-wrapper"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Subscribe/>
        </>
    )
}
export default Contactus;