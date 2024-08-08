import React from "react";
import { FaRegSmile } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { LuPlaneTakeoff } from "react-icons/lu";
import CountUp from 'react-countup';

const Counter = () =>{
    return(
        <>
            <div className="count-main">
                <div className="container">
                    <div className="count-inner">
                        <div className="count-row">
                            <div className="area-item">
                                <div className="counter-box">
                                    <div className="icon">
                                        <span><FaRegSmile /></span>
                                        <div className="num"><CountUp end={30} /></div>
                                        <h6>+ Happy Clients</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="area-item">
                                <div className="counter-box">
                                    <div className="icon">
                                        <span><FaUserTie /></span>
                                        <div className="num"><CountUp end={100} /></div>
                                        <h6>+ Expert Pilots</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="area-item">
                                <div className="counter-box">
                                    <div className="icon">
                                        <span><LuPlaneTakeoff /></span>
                                        <div className="num"><CountUp end={80} /></div>
                                        <h6>+ Jet Airplane</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="area-item">
                                <div className="counter-box">
                                    <div className="icon">
                                        <span><FaRegSmile /></span>
                                        <div className="num"><CountUp end={50} /></div>
                                        <h6>+ Win Awards</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Counter