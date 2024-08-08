import React from "react";
import Aboutpro from "./Aboutpro";
import { GoArrowRight,  GoCheckCircle} from "react-icons/go";
import { Link } from "react-router-dom"; 


const About = () => {
    return(
        <>
            <div className="about-main">
                <div className="container">
                    <div className="about-inner">
                        <div className="about-left">
                            <div className="about-img">
                                <img  className="img1" src="assest/image/01.jpg" alt="01" />
                                <img  className="img2" src="assest/image/02.jpg" alt="02" />
                            </div>
                        </div>
                        <div className="about-right">
                            <div className="site-header">
                                <span>about us</span>
                                <h2>We Are Here To Make Your Dreams Come True</h2>
                            </div>
                            <p>There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form, by injected humour, or
                                randomised words which don't look even.
                            </p>
                            <div className="list-wrapper">
                                <ul>
                                    <Aboutpro icon={<GoCheckCircle />} text={'Take a look at our round up of the best shows'}/>
                                    <Aboutpro icon={<GoCheckCircle />} text={'It has survived not only five centuries'}/>
                                    <Aboutpro icon={<GoCheckCircle />} text={'Lorem Ipsum has been the ndustry standard dummy text'}/>      
                                </ul>
                            </div>
                            <Link className="btn" to="/service">Discover More 
                                <span className="righticon"><GoArrowRight /> </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About