import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaPlay,FaRegClock ,FaRegUser } from "react-icons/fa";
import { LuPlaneTakeoff } from "react-icons/lu";

const Pack = () => {
    return(
        <>
            <div className="Login-main">
                <div className="container">
                    <div className="Login-inner">
                        <div className="hed-title">
                            <h2>Packages</h2>
                            <ul>
                                <li><Link to="/">home</Link></li>
                                <span><MdKeyboardDoubleArrowRight /></span>
                                <li className="active"> Packages</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
                <div className="pack-main">
                    <div className="container">
                        <div className="pack-inner">
                            <div className="pack-row">
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
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}
export default Pack;