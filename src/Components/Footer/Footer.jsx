import { assets } from "../../assets/Frontend/assets";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="content-left">
          <img className="logo" src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias nemo
            beatae, ratione amet aperiam in maiores possimus! Magnam, aperiam
            repudiandae.
          </p>
          <div className="social-icon">
            <a href="https://github.com/web-sid" target="_blank">
              <img
                src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/github-icon.png"
                alt="github"
              />
            </a>
            <a href="https://twitter.com/siddharth27soni" target="_blank">
              <img src={assets.twitter_icon} alt="twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/siddharth-soni-b2a0132a8/"
              target="_blank"
            >
              <img src={assets.linkedin_icon} alt="linkedin" />
            </a>
          </div>
        </div>
        <div className="content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+91 7683005609</li>
            <li>
              <a href="mailto:siddharth27soni@gmail.com">
                siddharth27soni@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copyright">
        Copyright 2034 © ChefsKitchen.com - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
