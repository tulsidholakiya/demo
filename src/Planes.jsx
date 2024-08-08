import React from "react";
import Planespro from "./Planespro";

const Planes = () => {
    return(
        <>
            <div className="plane-main">
                <div className="container">
                    <div className="plane-inner">
                        <div className="hed-text">
                            <span>planes</span>
                            <h2>Luxury Plane For You</h2>
                            <p> 
                                It is a long established fact that a reader will be distracted by the readable content
                                of a page when looking at its layout.
                            </p>
                        </div>
                       <div className="plane-row">
                            <Planespro img={'assest/image/plane-1.jpg'} text={'Private Jet Charter'}/>
                            <Planespro img={'assest/image/plane-2.jpg'} text={'Business Jet Charter'}/>
                            <Planespro img={'assest/image/plane-3.jpg'} text={'Air Ambulance'}/>
                            <Planespro img={'assest/image/plane-4.jpg'} text={'Private Helicopter'}/>
                            <Planespro img={'assest/image/plane-5.jpg'} text={'Luxury Plane'}/>
                            <Planespro img={'assest/image/plane-6.jpg'} text={'Duplex Plane'}/>
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Planes