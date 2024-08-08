import React from "react";
import { PiAirplaneTiltLight } from "react-icons/pi";
import Servicepro from "./Servicespro";
import { BsCalendar2Minus } from "react-icons/bs";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { RiSofaLine } from "react-icons/ri";
import { GiHelicopter,GiCommercialAirplane } from "react-icons/gi";

const Services = () => {
    return(
        <>
            <div className="service-main">
                <div className="container">
                    <div className="service-inner">
                        <div className="hed-text">
                            <span>Services</span>
                            <h2>What We Offer</h2>
                            <p> It is a long established fact that a reader will be distracted by   the readable content of a page when looking at its layout.
                            </p>
                        </div>
                        <div className="service-rows">
                               <Servicepro i={<PiAirplaneTiltLight />}/>
                               <Servicepro i={<BsCalendar2Minus />}/>
                               <Servicepro i={<HiOutlineCurrencyDollar />}/>
                               <Servicepro i={<RiSofaLine />}/>
                               <Servicepro i={<GiHelicopter />}/>
                               <Servicepro i={<GiCommercialAirplane />}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Services 