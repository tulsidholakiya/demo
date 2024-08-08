import React from "react";
import Services from "./Services";
import Counter from "./Counter";
import Planes from "./Planes";
import Packages from "./Packages";
import Team from "./Team";
import Testimonials from "./Testimonials";
import Partners from "./Partners";
import Blog from "./Blog";
import Subscribe from "./Subscribe";
import About from "./About";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import Book from "./Book";
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

const Home2 = () => {
    // var test = {
    //     responsive:{
    //     0:{
    //         items:1,
    //         nav:true
    //     },
    //     600:{
    //         items:3,
    //         nav:false
    //     },
    //     1000:{
    //         items:3,
    //         nav:false,
    //         loop:false,
    //         dots:true,
    //         autoplay:false
    //         }
    //     }
    // }
    return (
        <>
            <div className="contactus-main">
                <div className="container">
                    <div className="contactus-inner">
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
                        {/* <OwlCarousel className='owl-theme' loop margin={10} nav>
                            <div class='item'>
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
                            <div class='item'>
                                <h4>2</h4>
                            </div>
                            <div class='item'>
                                <h4>3</h4>
                            </div>
                        </OwlCarousel>; */}
                    </div>
                </div>
            </div>
            <About/>
            <Book/>
            <Services/>
            <Counter/>
            <Planes/>
            <Packages/>
            <Team/>
            <Testimonials/>
            <Partners/>
            <Blog/>
            <Subscribe/>
        </>
    );
}
export default Home2;