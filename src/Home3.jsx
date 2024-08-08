import React from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import Features from "./Features";
import About from "./About";
import Planes from "./Planes";
import Book from "./Book";
import Services from "./Services";
import Packages from "./Packages";
import Team from "./Team";
import Testimonials from "./Testimonials";
import Partners from "./Partners";
import Blog from "./Blog";
import Subscribe from "./Subscribe";

const Home3 = () => {
    return (
        <>
            <div className="Login-main">
                <div className="container">
                    <div className="Login-inner">
                        <div className="main-row">
                            <div className="items">
                                <div className="hero-con">
                                    <h6>Welcome To Our Airfly!</h6>
                                    <h1> Luxury Experience With Our Private Jet</h1>
                                    <p>There are many variations of passages available but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable.</p>
                                    <div className="click">
                                        <Link to="/" className="contact" >contact us <span><GoArrowRight /></span></Link>
                                        <Link  to="/aboutus" className="about">about us <span><GoArrowRight /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Features/>
            <About/>
            <Planes/>
            <Book/>
            <Services/>
            <Packages/>
            <Team/>
            <Testimonials/>
            <Partners/>
            <Blog/>
            <Subscribe/>
        </>
    );
}

export default Home3;