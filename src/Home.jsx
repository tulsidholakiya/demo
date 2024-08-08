import React from "react";
import Features from './Features';
import About from './About';
import Services from './Services';
import Planes from './Planes';
import Packages from './Packages';
import Team from './Team';
import Testimonials from './Testimonials';
import Partners from './Partners';
import Blog from './Blog';
import Subscribe from './Subscribe';
import Counter from './Counter';
import Main from "./Main";
import Intro from "./Intro";


const Home = () =>{
    return(
        <>
            <Main/>
            <Features/> 
            <About/>
            <Services/>
            <Counter/>
            <Intro/>
            <Planes/>
            <Packages/>
            <Team/>
            <Testimonials/>
            <Partners/>
            <Blog/>
            <Subscribe/>
        </>
    )
}
export default Home