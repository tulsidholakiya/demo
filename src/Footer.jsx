import React from "react";
import { FaFacebookF ,FaInstagram} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";  
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { Link } from "react-router-dom"; 


const Footer = () =>{
    return(
        <>
            <div className="footer-main">
                <div className="container">
                    <div className="footer-inner">
                        <div className="footer-row">
                            <div className="footer-item">
                                <div className="footer-logo">
                                    <Link to="/">
                                    <img src="assest/image/logo.png" alt="image" />
                                    </Link>
                                    <p>
                                        There are many variations of the passages available the majority have suffered alteration in some form by injected humour.
                                    </p>
                                    <ul>
                                        <li><Link to="/"><span><FaFacebookF /></span></Link></li>
                                        <li><Link to="/"><span><FaInstagram /></span></Link></li>
                                        <li><Link to="/"><span><FaXTwitter /></span></Link></li>
                                        <li><Link to="/"><span><AiOutlineYoutube /></span></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-item">
                                <div className="box-list">
                                    <div className="box-title">
                                        <h4>Quick Links</h4>
                                        <ul>
                                            <li><Link className="hover-text" to="/">about us</Link></li>
                                            <li><Link className="hover-text" to="/">FAQ's</Link></li>
                                            <li><Link className="hover-text" to="/">Terms Of Service</Link></li>
                                            <li><Link className="hover-text" to="/">privacy policy</Link></li>
                                            <li><Link className="hover-text" to="/">our service</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-item">
                            <div className="box-list">
                                    <div className="box-title">
                                        <h4>get started</h4>
                                        <ul>
                                            <li><Link className="hover-text" to="/">ragister</Link></li>
                                            <li><Link className="hover-text" to="/">our package</Link></li>
                                            <li><Link className="hover-text" to="/">contact us </Link></li>
                                            <li><Link className="hover-text" to="/">private jet cost </Link></li>
                                            <li><Link className="hover-text" to="/">careers</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-item">
                            <div className="box-list">
                                    <div className="box-title">
                                        <h4>contact us</h4>
                                        <ul className="contect">
                                            <li><Link to="/"><span><CiLocationOn /></span>15/B Road, New York, USA</Link></li>
                                            <li><Link to="/"><span><FiPhone /></span>+2 123 4566 789</Link></li>
                                            <li><Link to="/"><span><IoMailOutline /></span>info@example.com</Link></li>
                                            <li><Link to="/"><span><MdOutlineWatchLater /></span>Sun - Fri (10AM - 08PM)</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="copy-text"> © Copyright 2024
                        <Link to="/"> airfly </Link>
                            All Rights Reserved.
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;