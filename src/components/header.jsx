
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import videoOP from '../videoOP/videoOP.mp4'
export const Header = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000,
      offset: 200
    });
  }, []);
  return (
    <header id="header" data-aos="zoom-out">
        <div className="intro text-center"> 
        <img className="img-banner" src="img/banner.png" />   
            <video autoPlay  width="1460"  muted loop id="myVideo">
                <source src={videoOP} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>       
            <div class="overlay"></div>       
        </div>
    </header>
  );
};