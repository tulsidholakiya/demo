import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom"; 


const Intro = () => {
    return (
        <>
            <div className="intro-main">
                <div className="container">
                    <div className="intro-inner">
                        <div className="intro-row">
                            <div className="col">
                                <div className="hed-text">
                                    <span>intro video</span>
                                    <h2>Let's Check Our Video</h2>
                                    <p> 
                                        It is a long established fact that a reader will be distracted by the readable content
                                        of a page when looking at its layout.
                                    </p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="video-wrapper">
                                    <img src="assest/image/video.jpg" alt="video" />
                                    <Link to="https://youtu.be/22Q7Jv2b6jw">
                                        <span className="play"><FaPlay /></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Intro