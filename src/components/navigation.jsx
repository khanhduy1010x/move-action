import React from "react";
import Logo from "../videoOP/Logo.png"
export const Navigation = (props) => {
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
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
           <img className="logoOP" src={Logo}/>
          </a>{" "}
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#FACTORPOINTS" className="page-scroll">
              FACTOR POINTS
              </a>
            </li>
            <li>
              <a href="#OURJOURNEY" className="page-scroll">
              OUR JOURNEY
              </a>
            </li>
            <li>
              <a href="#DEVILFRUITS" className="page-scroll">
              Devil Fruits
              </a>
            </li>
            <li>
              <a href="#MOMENTS" className="page-scroll">
               MOMENTS
              </a>
            </li>
            <li>
              <a href="#ACTORSSAY" className="page-scroll">
              ACTORSSAY
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
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
