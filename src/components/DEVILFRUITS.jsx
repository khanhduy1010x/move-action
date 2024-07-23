import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const DEVILFRUITS = (props) => {
  const [effects, setEffects] = useState({
    fireEffect: false,
    freezeEffect: false,
    rubberBandEffect: false,
    shakeEffect: false,
    lightningEffect: false,
    heartEffect: false,
    brokenEffect: false,
  });

  useEffect(() => {
    AOS.init({
      duration: 3000,
      offset: 1,
    });
  }, []);

  const handleImageClick = (src) => {
    const newEffects = { ...effects };

    if (src === "img/gura.png") {
      newEffects.brokenEffect = true;
      newEffects.shakeEffect = true;
    } else if (src === "img/Mera.png") {
      newEffects.fireEffect = true;
    } else if (src === "img/hehe.png") {
      newEffects.freezeEffect = false; 
      newEffects.freezeEffect = true; 
    } else if (src === "img/Acqui1.png") {
      newEffects.rubberBandEffect = true;
    } else if (src === "img/pika.png") {
      newEffects.lightningEffect = true;
    } else if (src === "img/ope.png") {
      newEffects.heartEffect = true;
    }

    setEffects(newEffects);

    // Remove the shake and brokenEffect after 2 seconds
    if (newEffects.shakeEffect || newEffects.brokenEffect) {
      setTimeout(() => {
        setEffects((prevEffects) => ({
          ...prevEffects,
          shakeEffect: false,
          brokenEffect: false,
        }));
      }, 2000);
    }

    // Remove the fireEffect after 2 seconds
    if (newEffects.fireEffect) {
      setTimeout(() => {
        setEffects((prevEffects) => ({
          ...prevEffects,
          fireEffect: false,
        }));
      }, 2000);
    }

    // Remove the freezeEffect after 3 seconds
    if (newEffects.freezeEffect) {
      setTimeout(() => {
        setEffects((prevEffects) => ({
          ...prevEffects,
          freezeEffect: false,
        }));
      }, 4000);
    }

    // Remove the rubberBandEffect after 2 seconds
    if (newEffects.rubberBandEffect) {
      setTimeout(() => {
        setEffects((prevEffects) => ({
          ...prevEffects,
          rubberBandEffect: false,
        }));
      }, 2000);
    }

    // Remove the lightningEffect after 2 seconds
    if (newEffects.lightningEffect) {
      setTimeout(() => {
        setEffects((prevEffects) => ({
          ...prevEffects,
          lightningEffect: false,
        }));
      }, 2000);
    }

    // Remove the heartEffect after 2 seconds
    if (newEffects.heartEffect) {
      setTimeout(() => {
        setEffects((prevEffects) => ({
          ...prevEffects,
          heartEffect: false,
        }));
      }, 2000);
    }
  };

  return (
    <div
      id="DEVILFRUITS"
      className={`text-center ${
        effects.fireEffect ? "fire-effect" : ""
      } ${effects.freezeEffect ? "freeze-effect" : ""} ${
        effects.rubberBandEffect ? "rubber-band" : ""
      } ${effects.shakeEffect ? "shake broken-effect" : ""} ${
        effects.lightningEffect ? "lightning-effect" : ""
      } ${effects.heartEffect ? "heart-effect" : ""}`}
    >
      <div className="container">
        <div className="section-title">
          <h2 className="font-OP">Devil Fruits</h2>
          <p>
            Discover the mystical and powerful Devil Fruits in the world of One
            Piece. Each fruit grants unique abilities to those who consume them.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-4"
                  onClick={() => handleImageClick(d.image)}
                >
                  <div className="icon-wrapper border-GOLD">
                    <img
                      data-aos="zoom-in"
                      className="img-circleee"
                      src={d.image}
                      alt={d.name}
                    />
                  </div>
                  <div data-aos="fade-left" className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
