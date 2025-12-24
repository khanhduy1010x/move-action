
import React, { useEffect, useState } from "react";
import Logo from "../videoOP/Logo.png";

const sectionIds = [
  "FACTORPOINTS",
  "OURJOURNEY",
  "DEVILFRUITS",
  "MOMENTS",
  "ACTORSSAY",
  "team",
  "contact",
];

export const Navigation = (props) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      let foundSection = sectionIds[0];
      for (let i = 0; i < sectionIds.length; i++) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          // Ưu tiên team nếu đã vào viewport
          if (
            sectionIds[i] === "team" &&
            sectionTop - 80 <= scrollPosition &&
            scrollPosition < sectionTop + section.offsetHeight
          ) {
            foundSection = "team";
            break;
          }
          // Nếu không phải team, lấy section đầu tiên thỏa mãn
          if (sectionTop - 100 <= scrollPosition) {
            foundSection = sectionIds[i];
          }
        }
      }
      setActiveSection(foundSection);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img className="logoOP" src={Logo} alt="One Piece Logo" />
          </a>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li className={activeSection === "FACTORPOINTS" ? "active" : ""}>
              <a href="#FACTORPOINTS" className="page-scroll">
                FACTOR POINTS
              </a>
            </li>
            <li className={activeSection === "OURJOURNEY" ? "active" : ""}>
              <a href="#OURJOURNEY" className="page-scroll">
                OUR JOURNEY
              </a>
            </li>
            <li className={activeSection === "DEVILFRUITS" ? "active" : ""}>
              <a href="#DEVILFRUITS" className="page-scroll">
                Devil Fruits
              </a>
            </li>
            <li className={activeSection === "MOMENTS" ? "active" : ""}>
              <a href="#MOMENTS" className="page-scroll">
                MOMENTS
              </a>
            </li>
            <li className={activeSection === "ACTORSSAY" ? "active" : ""}>
              <a href="#ACTORSSAY" className="page-scroll">
                ACTORSSAY
              </a>
            </li>
            <li className={activeSection === "team" ? "active" : ""}>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li className={activeSection === "contact" ? "active" : ""}>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
