import { Image } from "./image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const MOMENTS = (props) => {
  useEffect(() => {
    AOS.init({ duration: 3000,
      offset: 1
     });
  }, []);
  return (
    <div id="MOMENTS" className="text-center" >
      <div className="container">
        <div className="section-title">
          <h2 className="font-OP">MOMENTS</h2>
          <p>
            Relive the most iconic and breathtaking moments from the One Piece live-action series. These scenes capture the essence of adventure, friendship, and epic battles.
          </p>
        </div>
        <div className="row" >
          <div className="MOMENTS-items" >
            {props.data
              ? props.data.map((d, i) => (
                <div data-aos="flip-left"
                  key={`${d.title}-${i}`}
                  className="col-sm-6 col-md-4 col-lg-4 border-GOLD"
                >
                  <Image
                    title={d.title}
                    largeImage={d.largeImage}
                    smallImage={d.smallImage}
                  
                  />
                </div>
              ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
