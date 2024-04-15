import React from "react";
import Navbar from "../components/Navbar";
import "./team.css";
import { Link } from "react-router-dom";
import Member1 from "../assets/anuj.jpg";
import Member2 from "../assets/ankur.jpg";
import Member3 from "../assets/neelmani.jpg";
import Member4 from "../assets/nikhil.jpg";
import Member5 from "../assets/anmol.jpg";
import Footer from "../components/Footer";

const Team = () => {
  return (
    <>
      <Navbar />
      <div className="teamPage">
        <h2>Our Team Members</h2>
        <div className="container">
          <div className="card">
            <div className="content">
              <div className="profile">
                <img src={Member5} alt="" />
              </div>
              <div className="detail">
                <h2>Anmol Pratap Singh</h2>
                <h4>Front-End Developer</h4>
                <div className="social">
                  <Link
                    to="https://www.linkedin.com/in/anmol-pratap-singh-bb984b2b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin"></i>
                  </Link>
                  <Link
                    to="https://www.instagram.com/_.anm0l?igsh=ajc3Nmxva3dqa2t5"
                    target="_blank"
                  >
                    <i className="fa fa-instagram"></i>
                  </Link>
                  <Link
                    to="https://x.com/1llll1lll1ll1?t=IwzMJ0MURYLbts5ur61fww&s=09"
                    target="_blank"
                  >
                    <i className="fa fa-twitter"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="profile">
                <img src={Member4} alt="" />
              </div>
              <div className="detail">
                <h2>Nikhil Kumar</h2>
                <h4>Front-End Developer</h4>
                <div className="social">
                  <Link
                    to="https://www.linkedin.com/in/nikhil-kumar-748a46302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin"></i>
                  </Link>
                  <Link
                    to="https://www.instagram.com/nikkgotnochill?igsh=b2VtaHc4NTk4ZWRo&utm_source=qr"
                    target="_blank"
                  >
                    <i className="fa fa-instagram"></i>
                  </Link>
                  <Link to="https://x.com/nikkgotnochills?s=11" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="profile">
                <img src={Member3} alt="" />
              </div>
              <div className="detail">
                <h2>Neelmani Singh Bisht</h2>
                <h4>React Developer</h4>
                <div className="social">
                  <Link
                    to="https://www.linkedin.com/in/neelmani-bisht-997259275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin"></i>
                  </Link>
                  <Link
                    to="https://www.instagram.com/neelu.in.wildlife?igsh=dHhnMDQ5YzB1a3Zk"
                    target="_blank"
                  >
                    <i className="fa fa-instagram"></i>
                  </Link>
                  <Link
                    to="https://x.com/neelmani_bisht?t=-keWy8Idfv_CRN5cUdiZqA&s=09"
                    target="_blank"
                  >
                    <i className="fa fa-twitter"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* // backend  */}
          <div className="card">
            <div className="content">
              <div className="profile">
                <img src={Member1} alt="" />
              </div>
              <div className="detail">
                <h2>Anuj Singh Bharadwaj</h2>
                <h4>Back-EndDeveloper</h4>
                <div className="social">
                  <Link
                    to="https://www.linkedin.com/in/anuj-singh-a61646234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin"></i>
                  </Link>
                  <Link
                    to="https://www.instagram.com/anuj_singh_bhardwaj?utm_source=qr&igsh=MWwzN3p5ejkxamNjYg=="
                    target="_blank"
                  >
                    <i className="fa fa-instagram"></i>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/anuj-singh-a61646234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                  >
                    <i className="fa fa-twitter"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="profile">
                <img src={Member2} alt="" />
              </div>
              <div className="detail">
                <h2>Ankul Agarwal</h2>
                <h4>Back-End Developer</h4>
                <div className="social">
                  <Link
                    to="https://www.linkedin.com/in/ankur-agarwal-283b76232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin"></i>
                  </Link>
                  <Link
                    to="https://www.instagram.com/geetay_ankul/"
                    target="_blank"
                  >
                    <i className="fa fa-instagram"></i>
                  </Link>
                  <Link
                    to="https://x.com/ankuragrwal63?t=kOQm4KT3y-648njgIzvotw&s=08"
                    target="_blank"
                  >
                    <i className="fa fa-twitter"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Team;
