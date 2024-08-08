import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { LuPlaneTakeoff } from "react-icons/lu";
import { IoAirplaneOutline } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";
import { FaUser } from "react-icons/fa";

const Book = () => {
    return (
        <>
            <div className="book-main">
                <div className="container">
                    <div className="book-inner">
                        <div className="hed-text">
                            <span>Book</span>
                            <h2>book your plan</h2>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                        </div>
                        <form>
                            <div className="row justify-content book-row">
                                <div className=" input-col">
                                    <div className="form-group">
                                        <label>plane type</label>
                                            <select className="select" name="" id="">
                                                <option value="">select your plane</option>
                                                <option value="1">Private Jet Charter</option>
                                                <option value="2">Business Jet Charter</option>
                                                <li className="option">Private Jet Charter</li>
                                                <option value="3">Private Helicopter</option>
                                                <option value="4">Air Ambulance</option>
                                            </select>
                                        <div className="nice-select">
                                            <span className="current">select your plane</span>
                                            <ul className="list">
                                                <li className="option">Select Your Plane</li>
                                                <li className="option">Business Jet Charter</li>
                                                <li className="option">Private Helicopter</li>
                                                <li className="option">Air Ambulance</li>
                                            </ul>
                                            <span className="icons"><SlArrowDown /></span>
                                                <div className="nice-icon">
                                                    <span className="plane"><IoAirplaneOutline /></span>
                                                </div>
                                        </div>
                                     
                                    </div>
                                </div>
                                <div className="input-col">
                                    <div className="form-group">
                                        <label> Arrival Date </label>
                                            <input type="text" placeholder="MM / DD / YY" />
                                            <span><FaCalendarAlt /></span>
                                    </div>
                                </div>
                                <div className="input-col">
                                    <div className="form-group">
                                        <label> Arrival Date </label>
                                            <input type="text" placeholder="MM / DD / YY" />
                                            <span><FaCalendarAlt /></span>
                                    </div>
                                </div>
                                <div className="input-col">
                                    <div className="form-group">
                                        <label>plane type</label>
                                            <select className="select" name="" id="">
                                                <option value="1">1 Passenger</option>
                                                <option value="2">2 Passenger</option>
                                                <option value="3">3 Passenger</option>
                                                <option value="4">4 Passenger</option>
                                                <option value="5">5 Passenger</option>
                                                <option value="6">6 Passenger</option>
                                            </select>
                                        <div className="nice-select">
                                            <span className="current">1 Passenger</span>
                                            <ul className="list">
                                               <li className="option focus">1 Passenger</li>
                                               <li className="option">2 Passenger</li>
                                               <li className="option">3 Passenger</li>
                                               <li className="option">4 Passenger</li>
                                               <li className="option">5 Passenger</li>
                                               <li className="option">6 Passenger</li>
                                            </ul>
                                            <span className="icons"><SlArrowDown /></span>
                                        </div>
                                        <div className="nice-icon">
                                            <span><FaUser /></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-col-btn">
                                    <button className="search-btn" type="submit">
                                    <span className="btn-icon"><LuPlaneTakeoff /></span>Book Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Book;
