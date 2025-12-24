
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
  <div style={{ textAlign: "center" }}>
    <div
      style={{
        position: "relative",
        width: "1460px",
        margin: "0 auto",
      }}
    >
      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        style={{
          width: "100%",
          display: "block",
        }}
      >
        <source src={videoOP} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* IMAGE CENTER */}
      <img
        src={'move-action/' + 'img/banner.png'}
alt="One Piece Banner"
        style={{
          position: "absolute",
          top: "80%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "40%",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* OVERLAY (optional) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.25)",
          zIndex: 1,
        }}
      />
    </div>
  </div>
</header>

  );
};