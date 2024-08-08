import React from "react";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { Link } from "react-router-dom";


const Subscribe = () =>{
    return (
        <>
            <div className="subscribe-main">
            <span className="icon"><IoMailOpenOutline /></span>
                <div className="container">
                    <div className="subscribe-inner">
                        <div className="sub-row">
                            <div className="col-sub">
                                <div className="subscribe-content">
                                    <h4>Subscribe To Our Newsletter</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                            </div>
                            <div className="col-sub">
                                <form>
                                    <tr>
                                        <td>
                                            <input className="control" type="email"  placeholder="Enter Your Email"/>
                                        </td>
                                    </tr>
                                    <Link to="/" className="sub"><span> <FaPaperPlane /></span>subscribe</Link>
                                </form>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Subscribe