import React, { useRef } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { PiSignInLight } from "react-icons/pi";
import Subscribe from "./Subscribe";
import axios from "axios";

const Login = () => {

   var txtemail = useRef();
   var txtpass = useRef();
   var navigate=useNavigate();

    const handleclick = (a) => {
        a.preventDefault();

        const obj = {
            "email": txtemail.current.value,
            "password": txtpass.current.value
        }

        axios.post('http://localhost:4040/login', obj).then(function (response) {
            console.log(response.data.data)
            alert(" login success");
            navigate('/')
        })
            .catch(function (error) {
                console.log(error);
            })
    }

    return(
        <>
            <div className="Login-main">
                <div className="container">
                    <div className="Login-inner">
                        <div className="hed-title">
                            <h2>Login</h2>
                            <ul>
                                <li><Link to="/">home</Link></li>
                                <span><MdKeyboardDoubleArrowRight /></span>
                                <li className="active"> Login</li>
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
                                    <p>login with your airfly account</p>
                                </div>
                                <form onSubmit={handleclick} >
                                    <div className="form-grp">
                                        <label>Email Address</label><br />
                                        <input className="form-con" type="email" placeholder="Your Email" ref={txtemail} />
                                    </div>
                                    <div className="form-grp">
                                        <label>Password</label><br />
                                        <input className="form-con" type="password" placeholder="Your Email" ref={txtpass} />
                                    </div>
                                    <div className="d-flex">
                                        <div className="form-check">
                                            <input className="check" type="checkbox"  />
                                            <label className="check-lab" htmlFor="remeber">Remember Me</label>
                                        </div>
                                        <Link to="/" className="forget-pass">Forget Password ?</Link>
                                    </div>
                                    <div className="login-btn">
                                        <button><span><PiSignInLight /></span>Login</button>
                                    </div>
                                </form>
                                <div className="login-footer">
                                    <p>Don't have an account?
                                        <Link className="reg-btn" to="/register"> Register</Link>
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
export default Login;