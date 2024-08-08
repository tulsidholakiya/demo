import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaPlay,FaRegClock ,FaRegUser } from "react-icons/fa";
import { LuPlaneTakeoff } from "react-icons/lu";
import { Link } from "react-router-dom"; 

const Packages = () =>{
    var test = {
        responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:false,
            dots:true,
            autoplay:false
            }
        }
    }
    return( 
        <>
            <div className="package-main">
                <div className="container">
                    <div className="package-inner">
                        <div className="heding-text">
                            <span>packages</span>
                            <h2>Tour Package For You</h2>
                            <p> 
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                        </div>
                        <div className="package-slider">
                            <OwlCarousel {...test} className='owl-theme' loop margin={10} nav>
                                <div class='item'>
                                    <div className="package-img">
                                        <img src="assest/image/2.jpg" alt="image" />
                                        <Link className="video-pack" to="https://youtu.be/2Gg6Seob5Mg?list=PLGmxyVGSCDKvmLInHxJ9VdiwEb82Lxd2E">
                                            <span><FaPlay /></span>
                                        </Link>
                                    </div>  
                                        <div className="package-content">
                                            <div className="package-title">
                                                <Link to="/">
                                                    <h4>The City Of Lights</h4>
                                                </Link>
                                            </div>
                                            <div className="package-info">
                                                <ul>
                                                    <li><span><FaRegClock /></span>May 11, 2024</li>
                                                    <li><span><FaRegUser /></span>8 Passenger</li>
                                                </ul>
                                            </div>
                                            <div className="package-bottom">
                                            <Link to="/"><span><LuPlaneTakeoff /></span> Book Now</Link>
                                                <div className="package-price">
                                                    <span>$250</span>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div class='item'>
                                <div className="package-img">
                                        <img src="assest/image/03.jpg" alt="image" />
                                        <Link className="video-pack" to="https://youtu.be/2Gg6Seob5Mg?list=PLGmxyVGSCDKvmLInHxJ9VdiwEb82Lxd2E">
                                            <span><FaPlay /></span>
                                        </Link>
                                    </div>  
                                        <div className="package-content">
                                            <div className="package-title">
                                            <Link to="/">
                                                    <h4>The City Of Lights</h4>
                                                </Link>
                                            </div>
                                            <div className="package-info">
                                                <ul>
                                                    <li><span><FaRegClock /></span>May 11, 2024</li>
                                                    <li><span><FaRegUser /></span>8 Passenger</li>
                                                </ul>
                                            </div>
                                            <div className="package-bottom">
                                            <Link to="/"><span><LuPlaneTakeoff /></span> Book Now</Link>
                                                <div className="package-price">
                                                    <span>$250</span>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div class='item'>
                                <div className="package-img">
                                        <img src="assest/image/04.jpg" alt="image" />
                                        <Link className="video-pack" to="https://youtu.be/2Gg6Seob5Mg?list=PLGmxyVGSCDKvmLInHxJ9VdiwEb82Lxd2E">
                                            <span><FaPlay /></span>
                                        </Link>
                                    </div>  
                                        <div className="package-content">
                                            <div className="package-title">
                                            <Link to="/">
                                                    <h4>The City Of Lights</h4>
                                                </Link>
                                            </div>
                                            <div className="package-info">
                                                <ul>
                                                    <li><span><FaRegClock /></span>May 11, 2024</li>
                                                    <li><span><FaRegUser /></span>8 Passenger</li>
                                                </ul>
                                            </div>
                                            <div className="package-bottom">
                                            <Link to="/"><span><LuPlaneTakeoff /></span> Book Now</Link>
                                                <div className="package-price">
                                                    <span>$250</span>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div class='item'>
                                <div className="package-img">
                                        <img src="assest/image/22202.jpg" alt="image" />
                                        <Link className="video-pack" to="https://youtu.be/2Gg6Seob5Mg?list=PLGmxyVGSCDKvmLInHxJ9VdiwEb82Lxd2E">
                                            <span><FaPlay /></span>
                                        </Link>
                                    </div>  
                                        <div className="package-content">
                                            <div className="package-title">
                                            <Link to="/">
                                                    <h4>The City Of Lights</h4>
                                                </Link>
                                            </div>
                                            <div className="package-info">
                                                <ul>
                                                    <li><span><FaRegClock /></span>May 11, 2024</li>
                                                    <li><span><FaRegUser /></span>8 Passenger</li>
                                                </ul>
                                            </div>
                                            <div className="package-bottom">
                                            <Link to="/"><span><LuPlaneTakeoff /></span> Book Now</Link>
                                                <div className="package-price">
                                                    <span>$250</span>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div class='item'>
                                <div className="package-img">
                                        <img src="assest/image/2.jpg" alt="image" />
                                        <Link className="video-pack" to="https://youtu.be/2Gg6Seob5Mg?list=PLGmxyVGSCDKvmLInHxJ9VdiwEb82Lxd2E">
                                            <span><FaPlay /></span>
                                        </Link>
                                    </div>  
                                        <div className="package-content">
                                            <div className="package-title">
                                            <Link to="/">
                                                    <h4>The City Of Lights</h4>
                                                </Link>
                                            </div>
                                            <div className="package-info">
                                                <ul>
                                                    <li><span><FaRegClock /></span>May 11, 2024</li>
                                                    <li><span><FaRegUser /></span>8 Passenger</li>
                                                </ul>
                                            </div>
                                            <div className="package-bottom">
                                            <Link to="/"><span><LuPlaneTakeoff /></span> Book Now</Link>
                                                <div className="package-price">
                                                    <span>$250</span>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div class='item'>
                                <div className="package-img">
                                        <img src="assest/image/04.jpg" alt="image" />
                                        <Link className="video-pack" to="https://youtu.be/2Gg6Seob5Mg?list=PLGmxyVGSCDKvmLInHxJ9VdiwEb82Lxd2E">
                                            <span><FaPlay /></span>
                                        </Link>
                                    </div>  
                                        <div className="package-content">
                                            <div className="package-title">
                                                <Link to="/">
                                                    <h4>The City Of Lights</h4>
                                                </Link>
                                            </div>
                                            <div className="package-info">
                                                <ul>
                                                    <li><span><FaRegClock /></span>May 11, 2024</li>
                                                    <li><span><FaRegUser /></span>8 Passenger</li>
                                                </ul>
                                            </div>
                                            <div className="package-bottom">
                                                <Link to="/"><span><LuPlaneTakeoff /></span> Book Now</Link>
                                                <div className="package-price">
                                                    <span>$250</span>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div class='item'>
                                <div className="package-img">
                                        <img src="assest/image/03.jpg" alt="image" />
                                        <Link className="video-pack" to="https://youtu.be/2Gg6Seob5Mg?list=PLGmxyVGSCDKvmLInHxJ9VdiwEb82Lxd2E">
                                            <span><FaPlay /></span>
                                        </Link>
                                    </div>  
                                        <div className="package-content">
                                            <div className="package-title">
                                                <Link to="/">
                                                    <h4>The City Of Lights</h4>
                                                </Link>
                                            </div>
                                            <div className="package-info">
                                                <ul>
                                                    <li><span><FaRegClock /></span>May 11, 2024</li>
                                                    <li><span><FaRegUser /></span>8 Passenger</li>
                                                </ul>
                                            </div>
                                            <div className="package-bottom">
                                            <Link to="/"><span><LuPlaneTakeoff /></span> Book Now</Link>
                                                <div className="package-price">
                                                    <span>$250</span>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div class='item'>
                                <div className="package-img">
                                        <img src="assest/image/22202.jpg" alt="image" />
                                        <Link className="video-pack" to="https://youtu.be/2Gg6Seob5Mg?list=PLGmxyVGSCDKvmLInHxJ9VdiwEb82Lxd2E">
                                            <span><FaPlay /></span>
                                        </Link>
                                    </div>  
                                        <div className="package-content">
                                            <div className="package-title">
                                            <Link to="/">
                                                    <h4>The City Of Lights</h4>
                                            </Link>
                                            </div>
                                            <div className="package-info">
                                                <ul>
                                                    <li><span><FaRegClock /></span>May 11, 2024</li>
                                                    <li><span><FaRegUser /></span>8 Passenger</li>
                                                </ul>
                                            </div>
                                            <div className="package-bottom">
                                            <Link to="/"><span><LuPlaneTakeoff /></span> Book Now</Link>
                                                <div className="package-price">
                                                    <span>$250</span>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div class='item'>
                                <div className="package-img">
                                        <img src="assest/image/2.jpg" alt="image" />
                                        <Link className="video-pack" to="https://youtu.be/2Gg6Seob5Mg?list=PLGmxyVGSCDKvmLInHxJ9VdiwEb82Lxd2E">
                                            <span><FaPlay /></span>
                                        </Link>
                                    </div>  
                                        <div className="package-content">
                                            <div className="package-title">
                                            <Link to="/">
                                                    <h4>The City Of Lights</h4>
                                                </Link>
                                            </div>
                                            <div className="package-info">
                                                <ul>
                                                    <li><span><FaRegClock /></span>May 11, 2024</li>
                                                    <li><span><FaRegUser /></span>8 Passenger</li>
                                                </ul>
                                            </div>
                                            <div className="package-bottom">
                                            <Link to="/"><span><LuPlaneTakeoff /></span> Book Now</Link>
                                                <div className="package-price">
                                                    <span>$250</span>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Packages