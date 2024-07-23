import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Caro1 from "../videoOP/caro1.jpg";
import Caro2 from "../videoOP/caro2.jpg";
import Caro3 from "../videoOP/caro3.jpg";
import Caro4 from "../videoOP/caro4.jpg";
import VIDEO from "../videoOP/WAVE.mp4"

export const OURJOURNEY = (props) => {
  useEffect(() => {
    AOS.init({ duration: 3000,
      offset: 1,
      delay: 3
    });
  }, []);

  return (
    
    <div id="OURJOURNEY" data-aos="fade-right">
        
      <div className="container">
      <video autoPlay  width="1460"  muted loop id="myVideoAb">
                <source src={VIDEO}type="video/mp4" />             
            </video>  
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
              </ol>
              <div className="carousel-inner">
                <div className="item active">
                  <img className="image-caro" src={Caro1} alt="Los Angeles" />
                </div>
                <div className="item">
                  <img className="image-caro" src={Caro2} alt="Chicago" />
                </div>
                <div className="item">
                  <img className="image-caro" src={Caro3} alt="New York" />
                </div>
                <div className="item">
                  <img className="image-caro" src={Caro4} alt="New York" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 des-OURJOURNEY">
            <div className="about-text">
              <h2 className="font-OP">Our Journey</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>What about our?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
              
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                        <li key={`${d}-${i}`}> {d}</li>
                      ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
