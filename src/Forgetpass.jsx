import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoKeyOutline } from "react-icons/io5";
import Subscribe from "./Subscribe";


const Forgetpass = () => {
    return(
        <>
            <div className="Login-main">
                <div className="container">
                    <div className="Login-inner">
                        <div className="hed-title">
                            <h2>Forget Password</h2>
                            <ul>
                                <li><Link to="/">home</Link></li>
                                <span><MdKeyboardDoubleArrowRight /></span>
                                <li className="active"> Forget Password</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-area">
                <div className="container">
                    <div className="login-inner">
                        <div className="login-form">
                                <div className="login-hed">
                                    <img src="assest/image/logo-dark.png" alt="" />
                                    <p>reset your airfly account</p>
                                </div>
                                <form>
                                    <div className="form-grp">
                                        <label>Email Address</label><br />
                                        <input className="form-con" type="email" placeholder="Your Email" />
                                    </div>
                                    <div className="login-btn">
                                        <button><span><IoKeyOutline /></span>Send Reset Link</button>
                                    </div>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
            <Subscribe/>
        </>
    );
}
export default Forgetpass;