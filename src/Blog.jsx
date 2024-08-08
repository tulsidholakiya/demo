import { Link } from "react-router-dom"; 
import React from "react";
import { FaRegUser,FaCalendarAlt } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const Blog = () => {
    return(
        <>
            <div className="blog-main">
                <div className="container">
                    <div className="blog-inner">
                        <div className="heding-text">
                                <span>our blog</span>
                                <h2>Latest News & Blog</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div className="blog-content">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="assest/image/001.jpg" alt="" />
                                </div>
                                <div className="blog-info">
                                    <div className="blog-meta">
                                        <ul>
                                            <li><span><FaRegUser /></span> Nancy Castdo</li>
                                            <li><span><FaCalendarAlt /></span> May 11, 2024</li>
                                        </ul>
                                    </div>
                                    <h5><Link className="hed" to="/">There are many variations of passages available</Link></h5>
                                    <p> It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. </p>
                                        <Link to="/">read more <span><GoArrowRight /></span></Link>
                                </div>
                            </div>
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="assest/image/002.jpg" alt="" />
                                </div>
                                <div className="blog-info">
                                    <div className="blog-meta">
                                        <ul>
                                            <li><span><FaRegUser /></span> Nancy Castdo</li>
                                            <li><span><FaCalendarAlt /></span> May 11, 2024</li>
                                        </ul>
                                    </div>
                                    <h5><Link className="hed" to="/">There are many variations of passages available</Link></h5>
                                    <p> It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. </p>
                                        <Link to="/">read more <span><GoArrowRight /></span></Link>
                                </div>
                            </div>
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="assest/image/003.jpg" alt="" />
                                </div>
                                <div className="blog-info">
                                    <div className="blog-meta">
                                        <ul>
                                            <li><span><FaRegUser /></span> Nancy Castdo</li>
                                            <li><span><FaCalendarAlt /></span> May 11, 2024</li>
                                        </ul>
                                    </div>
                                    <h5><Link className="hed" to="/">There are many variations of passages available</Link></h5>
                                    <p> It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. </p>
                                        <Link to="/">read more <span><GoArrowRight /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Blog