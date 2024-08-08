import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import OwlCarousel from 'react-owl-carousel';

const Testimonials = () => {
    var test ={
        responsive:{
            0:{
                items:2,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:2,
                nav:false,
                loop:false,
                dots:true,
                autoplay:false
            }
        }
    }
    return (
        <>  
            <div className="testimonials-main">
                <div className="container">
                    <div className="testimonials-inner">
                        <div className="heding-text">
                            <span>Testimonials</span>
                            <h2>What Client Say's</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div className="slider-main">
                        <OwlCarousel {...test} className='owl-theme' loop margin={10} nav>
                            <div class='item'>
                                <div className="testimonial-single">
                                        <div className="testimonial-quote">
                                            <span className="testimonial-quote-icon">
                                            <RiDoubleQuotesL />
                                            </span>
                                            <div className="testimonial-rate">
                                                <span> </span>
                                            </div>
                                            <p>
                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                            </p>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="testimonial-img">
                                                <img className="imgpro" src="assest/image/00001.jpg" alt="image" />
                                            </div>
                                            <div className="testimonial-info">
                                                <h4>Gordon D Novak</h4>
                                                <p>Client</p>
                                            </div>
                                        </div>
                                </div>  
                            </div>
                            <div class='item'>
                                <div className="testimonial-single">
                                        <div className="testimonial-quote">
                                            <span className="testimonial-quote-icon">
                                            <RiDoubleQuotesL />
                                            </span>
                                            <div className="testimonial-rate">
                                                <span> </span>
                                            </div>
                                            <p>
                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                            </p>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="testimonial-img">
                                                <img className="imgpro" src="assest/image/00002.jpg" alt="image" />
                                            </div>
                                            <div className="testimonial-info">
                                                <h4>Gordon D Novak</h4>
                                                <p>Client</p>
                                            </div>
                                        </div>
                                </div>  
                            </div>
                            <div class='item'>
                                <div className="testimonial-single">
                                        <div className="testimonial-quote">
                                            <span className="testimonial-quote-icon">
                                            <RiDoubleQuotesL />
                                            </span>
                                            <div className="testimonial-rate">
                                                <span> </span>
                                            </div>
                                            <p>
                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                            </p>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="testimonial-img">
                                                <img className="imgpro" src="assest/image/00003.jpg" alt="image" />
                                            </div>
                                            <div className="testimonial-info">
                                                <h4>Gordon D Novak</h4>
                                                <p>Client</p>
                                            </div>
                                        </div>
                                </div>  
                            </div>
                            <div class='item'>
                                <div className="testimonial-single">
                                        <div className="testimonial-quote">
                                            <span className="testimonial-quote-icon">
                                            <RiDoubleQuotesL />
                                            </span>
                                            <div className="testimonial-rate">
                                                <span> </span>
                                            </div>
                                            <p>
                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                            </p>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="testimonial-img">
                                                <img className="imgpro" src="assest/image/00004.jpg" alt="image" />
                                            </div>
                                            <div className="testimonial-info">
                                                <h4>Gordon D Novak</h4>
                                                <p>Client</p>
                                            </div>
                                        </div>
                                </div>  
                            </div>
                        </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Testimonials