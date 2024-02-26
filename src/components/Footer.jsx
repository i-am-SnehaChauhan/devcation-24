import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter, faFacebook, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer id="footer" style={{ padding: '50px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'center', textAlign: 'left' }}>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '50%' }}>

          <div style={{ marginBottom: '30px', width: '40%' }}>
            <h3 style={{ fontSize: '34px', marginBottom: '15px', color: 'white', lineHeight: '1' }}>JOIN OUR CHAPTER</h3>
            <a href="https://bit.ly/Year-At-GDSC-IGDTUW)" style={{ display: 'block', fontSize: '14px', color: '#1bb1dc', textDecoration: 'none', marginBottom: '10px' }} target="_blank">Year with GDSC IGDTUW 2023</a>
            <a href="https://gdsc.community.dev/indira-gandhi-delhi-technical-university-for-women-delhi/" style={{ display: 'block', fontSize: '14px', color: '#1bb1dc', textDecoration: 'none' }} target="_blank">Join our chapter here!</a>
          </div>


          <div style={{ marginBottom: '30px' }}>
            <h4 style={{ fontSize: '18px', marginBottom: '15px', color: 'white' }}>Contact us</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="mailto:dscigdtuw@gmail.com" style={{ textDecoration: 'none', color: 'gray' }}>dscigdtuw@gmail.com</a></li>
              <li><a href="mailto:gdsc.devcation@gmail.com" style={{ textDecoration: 'none', color: 'gray' }}>gdsc.devcation@gmail.com</a></li>
            </ul>
            <div className="socil-links" style={{"marginTop":"15px"}}>
              <a href="https://twitter.com/gdsc_igdtuw" target="_blank" className="twitter">
                <Icon color="primary" component={XIcon} style={{ fontSize: '2rem', padding: '0.5rem', borderRadius: '50%', backgroundColor: '#1BB1DC', color: 'white' }} />
              </a>
              <a href="https://www.facebook.com/GDSCIGDTUW/" target="_blank" className="facebook" style={{"marginLeft":"5px"}}>
                <Icon color="primary" component={FacebookIcon} style={{ fontSize: '2rem', padding: '0.5rem', borderRadius: '50%', backgroundColor: '#1BB1DC', color: 'white' }} />
              </a>
              <a href="https://www.linkedin.com/company/dscigdtuw/mycompany/" target="_blank" className="linkedin" style={{"marginLeft":"5px"}}>
                <Icon color="primary" component={LinkedInIcon} style={{ fontSize: '2rem', padding: '0.5rem', borderRadius: '50%', backgroundColor: '#1BB1DC', color: 'white' }} />
              </a>
              <a href="https://www.instagram.com/gdsc_igdtuw" target="_blank" className="instagram" style={{"marginLeft":"5px"}}>
                <Icon color="primary" component={InstagramIcon} style={{ fontSize: '2rem', padding: '0.5rem', borderRadius: '50%', backgroundColor: '#1BB1DC', color: 'white' }} />
              </a>
              <a href="https://www.youtube.com/@DSCIGDTUW" target="_blank" className="instagram" style={{"marginLeft":"5px"}}>
                <Icon color="primary" component={YouTubeIcon} style={{ fontSize: '2rem', padding: '0.5rem', borderRadius: '50%', backgroundColor: '#1BB1DC', color: 'white' }} />
              </a>
            </div>
          </div>

        </div>

        <div style={{ marginBottom: '30px', width: '40%' }}>
          <h4 style={{ fontSize: '18px', marginBottom: '15px', color: 'white' }}>Send us a message</h4>
          <p style={{ marginBottom: '20px', color: 'gray' }}>Send your message here and we will try to get back to you as soon as possible.</p>
          <form action="https://formspree.io/f/mqkoaydw" method="post" role="form">
            <div style={{ marginBottom: '20px' }}>
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ced4da', borderRadius: '5px', backgroundColor: 'white' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ced4da', borderRadius: '5px', backgroundColor: 'white' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ced4da', borderRadius: '5px', backgroundColor: 'white' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <textarea className="form-control" name="message" rows="5" placeholder="Message" required style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ced4da', borderRadius: '5px', backgroundColor: 'white' }}></textarea>
            </div>
            <div className="text-center">
              <button type="submit" title="Send Message" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', textDecoration: 'none' }}>Send Message</button>
            </div>
          </form>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
