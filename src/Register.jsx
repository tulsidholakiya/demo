import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaRegPaperPlane } from "react-icons/fa";
import Subscribe from "./Subscribe";

const Register = () => {
    return(
        <>
            <div className="Login-main">
                <div className="container">
                    <div className="Login-inner">
                        <div className="hed-title">
                            <h2>Register</h2>
                            <ul>
                                <li><Link to="/">home</Link></li>
                                <span><MdKeyboardDoubleArrowRight /></span>
                                <li className="active"> Register</li>
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
                                    <p>create your airfly account</p>
                                </div>
                                <form action="">
                                    <div className="form-grp">
                                        <label>Full Name</label><br />
                                        <input className="form-con" type="text" placeholder="Your Name" />
                                    </div>
                                    <div className="form-grp">
                                        <label>Email Address</label><br />
                                        <input className="form-con" type="email" placeholder="Your Email" />
                                    </div>
                                    <div className="form-grp">
                                        <label>Password</label><br />
                                        <input className="form-con" type="password" placeholder="Your Email" />
                                    </div>
                                    <div className="reg-flex">
                                        <div className="form-check">
                                            <input className="check" type="checkbox"  />
                                            <label className="check-lab" htmlFor="remeber"> I agree with the</label>
                                            <Link to="/" className="forget-term"> Terms Of service</Link>
                                        </div>
                                    </div>
                                    <div className="login-btn">
                                        <button><span><FaRegPaperPlane /></span>Register</button>
                                    </div>
                                </form>
                                <div className="login-footer">
                                    <p>Already have an account?
                                        <Link className="reg-btn" to="/login"> Login</Link>
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <Subscribe/>
        </>
    );
}
export default Register;