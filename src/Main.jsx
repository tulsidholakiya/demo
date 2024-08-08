import React from "react";
import { GoArrowRight } from "react-icons/go";
import { TbPlane } from "react-icons/tb";
import { Link } from "react-router-dom"; 

const Main = () => {
    return(
        <>
            <div className="main">
               <div className="container">
                    <div className="main-inner">
                        <div className="main-row">
                            <div className="items">
                                <div className="hero-con">
                                    <h6>Welcome To Our Airfly!</h6> 
                                    <h1> Luxury Experience With Our Private Jet</h1>
                                    <p>There are many variations of passages available but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable.</p>
                                    <div className="click">
                                        <Link to="/contact" className="contact" >contact us <span><GoArrowRight /></span></Link>
                                        <Link  to="/aboutus" className="about">about us <span><GoArrowRight /></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="items">
                                <div className="hero-img">
                                    <img src="assest/image/hero.png" alt="image" />
                                </div>
                            </div>
                        </div>     
                    </div>
                </div>
                <div className="search-area">
                    <div className="container">
                        <div className="search-inner">
                            <form>
                                <div className="row">
                                    <div className="search-col">
                                        <div className="form-group">
                                            <div>Plane Type</div>
                                                <select className="input-text" name="" id="">
                                                    <option className="option" value="">Select Your Plane</option>
                                                    <option className="option" value="1">Private Jet Charter</option>
                                                    <option className="option" value="2">Business Jet Charter</option>
                                                    <option className="option" value="3">Private Helicopter</option>
                                                    <option className="option" value="4">Air Ambulance</option>
                                                </select>
                                                <div className="nice-icon">
                                                     <span><TbPlane /></span>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="search-col">
                                        <div className="form-group">
                                            <label htmlFor="">arrival date</label>
                                        </div>
                                    </div>
                                    <div className="search-col"></div>
                                    <div className="search-col"></div>
                                    <div className="search-col"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main