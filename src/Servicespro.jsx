import React from "react";
import { BiLogoMagento } from "react-icons/bi";
import { GoArrowRight} from "react-icons/go";
import { Link } from "react-router-dom"; 

const Servicepro = (a) => {
    return (
        <>
            <div className="colume">
                <div className="service-item">
                    <div className="service-icon">
                    <span>{a.i}</span>
                    </div>
                    <div className="service-content">
                        <h4>
                        <Link to="/">Luxury Travel</Link>
                        </h4>
                        <p>
                        There are many variations of passages available but the majority have suffered alteration in some for injected humour or randomised words which don't look even slightly believable. 
                        </p>
                        <Link className="btn" to="/">Learn More
                            <span className="righticon"><GoArrowRight /></span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Servicepro
