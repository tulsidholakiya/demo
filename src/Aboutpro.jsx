import React from "react";


const Aboutpro = (a) => {
    return(
        <>
             <li>
                <div className="icon">
                    <span>{a.icon}</span>
                </div>
                <div className="text">
                    <p>{a.text}</p>
                </div>
            </li>  
        </>
    )
}
export default Aboutpro

