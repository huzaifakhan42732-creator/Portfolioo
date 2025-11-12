import React from "react";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaArrowUp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Connect with me &copy; {new Date().getFullYear()}</p>
      </div>

      <div className="social-icons">
        <a
          href="https://www.instagram.com/huzaifakhan42730"
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/+923034750866"
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.linkedin.com/in/huzaifa-khan-57a372385?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Scroll to top arrow */}
      <div className="scroll-top" onClick={scrollToTop}>
        <FaArrowUp />
      </div>
    </footer>
  );
};

export default Footer;
