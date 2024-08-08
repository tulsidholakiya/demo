import React from "react";
import { FaRegHeart,FaStar } from "react-icons/fa";
import { RiSofaFill } from "react-icons/ri";
import { IoIosWifi } from "react-icons/io";
import { GiHeatHaze } from "react-icons/gi";
import { TbPlaneDeparture } from "react-icons/tb";  
import { Link } from "react-router-dom"; 


const Planespro = (a) => {
    return(
        <>
            <div className="plane-items">
                <div className="plane-img">
                    <span className="text">popular</span>
                    <img src={a.img} alt="plane1" />
                    <Link to="/">
                        <span className="icon"><FaRegHeart /></span>
                    </Link>
                </div>
                    <div className="plane-content">
                        <div className="plane-title-info">
                            <div className="plane-title">
                            <Link to="/"><h4>{a.text}</h4></Link>
                                <p>Charter B1528</p>
                            </div>
                            <div className="plane-rate">
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                            </div>
                        </div>
                        <div className="plane-price">
                            <span><strong>$250</strong> / Per Hour</span>
                        </div>
                        <div className="plane-service">
                            <ul>
                                <li><span><RiSofaFill /></span>10 - 14 Seats</li>
                                <li><span><IoIosWifi /></span>Inflight Wifi</li>
                                <li><span><GiHeatHaze /></span>AC</li>
                            </ul>
                        </div>
                        <div className="footer-bottom">
                        <Link to="/"><span><TbPlaneDeparture /></span> Book Now</Link>
                        </div>
                    </div>
        </div>
        </>
    )
}
export default Planespro;