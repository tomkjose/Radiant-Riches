import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__categories">
          <p className="footer__categories--title">Categories</p>
          <ul className="footer__categories--list">
            <li className="footer__categories--item">Web Builder</li>
            <li className="footer__categories--item">Hosting</li>
            <li className="footer__categories--item">Data Center</li>
            <li className="footer__categories--item">Robotic-Automation</li>
          </ul>
        </div>
        <div className="footer__contact">
          <p className="footer__contact--title">Contact</p>
          <ul className="footer__contact--list">
            <li className="footer__contact--item">Contact</li>
            <li className="footer__contact--item">Privacy Policy</li>
            <li className="footer__contact--item">Terms Of Service</li>
            <li className="footer__contact--item">Categories</li>
            <li className="footer__contact--item">About</li>
          </ul>
        </div>
        <div className="footer__country">
          <select className="footer__select">
            <option>United Sates</option>
            <option>India</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Footer;
