import React from "react";
import Teampro from "./Teampro";


const Team = () => {
    return(
        <>
            <div className="team-main">
                <div className="container">
                    <div className="team-inner">
                        <div className="heding-text">
                                <span>team</span>
                                <h2>meet our team</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>
                        <div className="team-row">
                           <Teampro img={'assest/image/3.jpg'} text={'Malissa Fierro'}/>
                           <Teampro img={'assest/image/05.jpg'} text={'Florence Long'}/>
                           <Teampro img={'assest/image/06.jpg'} text={'Melvin Castillo'}/>
                           <Teampro img={'assest/image/07.jpg'} text={'Johni Welsh'}/>
                        </div>
                </div>
            </div>
        </>
    )
}
export default Team