import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export const ACTORSSAY = (props) => {
  useEffect(() => {
    AOS.init({ duration: 3000,
      offset:1,
      delay:3
     });
  }, []);

  return (
    <div id="ACTORSSAY" data-aos="zoom-out-left">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="font-OP">the actors say</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image border-GOLD">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
