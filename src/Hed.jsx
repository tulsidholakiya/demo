import React from "react";
import { GoChevronDown,GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom"; 

const Hed = () => {
    return(
        <>
            <div className="main-nevbar">
                <div className="container">
                    <div className="main-inner">
                        <div className="navbar-brand">
                            <Link className="navbar" to="/">
                                <img src="assest/image/logo.png"></img>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hed;