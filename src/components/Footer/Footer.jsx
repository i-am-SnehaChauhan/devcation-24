import "./Footer.css";
import { Icon } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer-cta pt-5 pb-5">
        <div className="flex items-center lg:space-x-64 md:space-x-16">
          <div className="col-xl-4 col-md-4 text-left sm:text-left">
            <a
              href="https://discord.gg/5fz4rza3cn"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-link"
            >
              <div className="single-cta">
                <i className="fab fa-discord"></i>
                <div className="cta-text">
                  <h4>Join Discord</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xl-4 col-md-4 text-left">
            <a
              href="https://drive.google.com/file/d/1ZG9OgJfCtQxpymo0c1X2hUqPNCYY0eNa/view"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-link"
            >
              <div className="single-cta">
                <i className="fas fa-book"></i>
                <div className="cta-text">
                  <h4>Reference</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xl-4 col-md-4 mb-30 text-left">
            <a href="https://devcation-24.devfolio.co/overview" className="cta-link">
              <div className="single-cta">
                <i className="fas fa-globe"></i>
                <div className="cta-text">
                  <h4>Devcation`24</h4>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="footerContainer">
        <div className="footerText">
          <div className="FooterTextJoin">
            <h3>
              JOIN OUR <br /> CHAPTER
            </h3>
            <a
              href="https://bit.ly/Year-At-GDSC-IGDTUW)"
              target="_blank"
              rel="noopener noreferrer"
            >
              Year with GDSC IGDTUW 2023
            </a>
            <a
              href="https://gdsc.community.dev/indira-gandhi-delhi-technical-university-for-women-delhi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join our chapter here!
            </a>
          </div>

          <div className="FooterTextContact">
            <h4>Contact us</h4>
            <ul>
              <li>
                <a href="mailto:dscigdtuw@gmail.com">dscigdtuw@gmail.com</a>
              </li>
              <li>
                <a href="mailto:gdsc.devcation@gmail.com">
                  gdsc.devcation@gmail.com
                </a>
              </li>
            </ul>
            <div className="social-links">
              <a
                href="https://twitter.com/gdsc_igdtuw"
                target="_blank"
                rel="noopener noreferrer"
                className="twitter"
              >
                <Icon className="twitter" color="primary" component={XIcon} />
              </a>
              <a
                href="https://www.facebook.com/GDSCIGDTUW/"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook"
              >
                <Icon color="primary" component={FacebookIcon} />
              </a>
              <a
                href="https://www.linkedin.com/company/dscigdtuw/mycompany/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
              >
                <Icon color="primary" component={LinkedInIcon} />
              </a>
              <a
                href="https://www.instagram.com/gdsc_igdtuw"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram"
              >
                <Icon color="primary" component={InstagramIcon} />
              </a>
              <a
                href="https://www.youtube.com/@DSCIGDTUW"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram"
              >
                <Icon color="primary" component={YouTubeIcon} />
              </a>
            </div>
          </div>
        </div>

        <div className="FooterFormdiv">
          <h4>Send us a message</h4>
          <p>
            Send your message here and we will try to get back to you as soon as
            possible.
          </p>
          <form
            className="FooterForm"
            action="https://formspree.io/f/mqkoaydw"
            method="post"
            role="form"
          >
            <div className="FooterInput">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="FooterEmail">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="FooterSubject">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="FooterMsg">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="Footerbutton">
              <button type="submit" title="Send Message">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
