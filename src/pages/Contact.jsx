import React from "react";
import "./contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="contact">
        <div className="container">
          <div className="content">
            <div className="left-side">
              <div className="address details">
                <i className="fas fa-map-marker-alt"></i>
                <div className="topic">Address</div>
                <div className="text-one">Bidholi, Dehradun</div>
                <div className="text-two">Uttrakhand India</div>
              </div>
              <div className="phone details">
                <i className="fas fa-phone-alt"></i>
                <div className="topic">Phone</div>
                <div className="text-one">+91 9761578329</div>
                <div className="text-two">+91 7392913589</div>
              </div>
              <div className="email details">
                <i className="fas fa-envelope"></i>
                <div className="topic">Email</div>
                <div className="text-one">frost.ankur019@gmail.com</div>
                <div className="text-two">anujbhardwaj12@gmail.com</div>
              </div>
            </div>
            <div className="right-side">
              <div className="topic-text">Send us a message</div>
              <p>
                If you have any work from me or any types of queries related to
                my tutorial, you can send me a message from here. It's my
                pleasure to help you.
              </p>
              <form action="https://formspree.io/f/mjvnprzl" method="POST">
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="input-box message-box">
                  {/* Add message input box here */}
                  <textarea
                    placeholder="Enter your message"
                    name="message"
                    id="message"
                  ></textarea>
                </div>
                <div className="button">
                  <input type="submit" value="Send Now" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
