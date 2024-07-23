import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export const FACTORPOINTS = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000,
      offset: 1
     });
  }, []);
  return (
    <div id="FACTORPOINTS"   data-aos="flip-down" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title font-title ">
          <h2 className="font-OP">Factor points</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <div className="icon-wrapper border-GOLD" >
                  <img className="img-circlee" src={d.image}></img>
                  </div>
                 
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
