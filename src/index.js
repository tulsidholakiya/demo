import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Home from './Home';
import Contactus from './Contactus';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ser from './Ser';
import Aboutus from './Aboutus';
import Singleser from './Singleser';
import Home2 from './Home2';
import Home3 from './Home3';
import Plane1 from './Plane1';
import Plane2 from './Plane2';
import Plane3 from './Plane3';
import Plane4 from './Plane4';
import Plane5 from './Plane5';
import Login from './Login';
import Register from './Register';
import Forgetpass from './Forgetpass';
import Error from './Error';
import Teamofservice from './Teamofservice';
import Pack from './Pack';
import Packsing from './Packsing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <>
            <BrowserRouter>
                  <Header />
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home2" element={<Home2/>} />
                        <Route path="/home3" element={<Home3/>} />
                        <Route path="/contact" element={<Contactus />} />
                        <Route path="/aboutus" element={<Aboutus />} />
                        <Route path="/plane1" element={<Plane1/>} />
                        <Route path="/plane2" element={<Plane2/>} />
                        <Route path="/plane3" element={<Plane3/>} />
                        <Route path="/plane4" element={<Plane4/>} />
                        <Route path="/plane5" element={<Plane5/>} />
                        <Route path="/pack" element={<Pack/>} />
                        <Route path="/packsing" element={<Packsing/>} />
                        <Route path="/service" element={<Ser />} />
                        <Route path="/singelser" element={<Singleser/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/register" element={<Register/>} />
                        <Route path="/forpass" element={<Forgetpass/>} />
                        <Route path="/error" element={<Error/>} />
                        <Route path="/tos" element={<Teamofservice/>} />
                  </Routes>
                  <Footer />
            </BrowserRouter>
      </>
);

