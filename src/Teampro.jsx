import React from "react";
import { FaFacebookF,FaInstagram,FaLinkedin,FaYoutube } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom"; 


const Teampro = (a)  =>{
    return(
        <>
            <div className="team-item">
                <div className="img-content">
                    <img src={a.img} alt="3" />
                </div>
                <div className="text-content">
                    <div className="team-bio">
                    <Link to="/">{a.text}</Link>
                        <p>pilot</p>
                    </div>
                    <div className="team-social">
                        <Link to="/"><span><FaFacebookF /></span></Link>
                        <Link to="/"><span><FaSquareTwitter /></span></Link>
                        <Link to="/"><span><FaInstagram /></span></Link>
                        <Link to="/"><span><FaLinkedin /></span></Link>
                        <Link to="/"><span><FaYoutube /></span></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Teampro