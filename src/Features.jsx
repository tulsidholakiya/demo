import React from "react";
import Featurepro from "./Featurepro";
import { GiCommercialAirplane } from "react-icons/gi";
import { TfiWorld } from "react-icons/tfi";
import { SlDiamond } from "react-icons/sl";

const Features = () => {
    return(
        <>
            <div className="feature-main">
                <div className="container">
                    <div className="feature-inner">
                        <div className="heading-text">
                            <span className="title">features</span>
                            <h2>top feature</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable <br/> content of a page when looking at its layout.</p>
                        </div>
                        <div className="row">
                            <Featurepro a={<SlDiamond />} />
                            <Featurepro a={<GiCommercialAirplane />}/>       
                            <Featurepro a={<TfiWorld />}/>       
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Features