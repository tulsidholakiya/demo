import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Partnerspro from "./Partnerspro";

const Partners =() => {
    var test = {
        responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:6,
            nav:false,
            loop:true,
            dots:false,
            autoplay:true
        }
    }
    }
    return(
        <>  
            <div className="Partners-main">
                <div className="container">
                    <div className="partners-inner">
                        <div className="hed-text">
                            <span>Partners</span>
                            <h2>Our Awesome Partners</h2>
                            <p> 
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                        </div>
                        <div className="partners-wrapper">
                            <OwlCarousel {...test} className='owl-theme' loop margin={10} nav>
                               <Partnerspro img={'assest/image/1.png'}/>
                               <Partnerspro img={'assest/image/2.png'}/>
                               <Partnerspro img={'assest/image/3.png'}/>
                               <Partnerspro img={'assest/image/4.png'}/>
                               <Partnerspro img={'assest/image/5.png'}/>
                               <Partnerspro img={'assest/image/6.png'}/>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Partners