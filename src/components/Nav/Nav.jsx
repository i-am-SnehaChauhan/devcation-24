import { useState,useEffect } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';
import './Nav.css';
import logo from "../../assets/gdsc-logo.png"
import { Icon } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Nav = () => {
    const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);
    const [dropdownNav,setDropdownNav]=useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const NavToggle=()=>{
      setDropdownNav(!dropdownNav);
    }
    const toggleDropdown = () => {
      setDropdownMenuOpen(!dropdownMenuOpen);
    };
    

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <BrowserRouter>
    <header id="navheader" className={`fixed-top ${scrollPosition > 100 ? 'black-bg' : ''}`}>
      <div className="navcontainer" >
        <a href='/' className="logo-container"><img src={logo} alt="Logo" className="logo me-auto" style={{"height":"110px"}}/></a>
        <nav id="navbar" className={`navbar ${dropdownNav?'dropdown-nav':'nav-hide'}`} >
          <ul>
            <li><a className="nav-link scrollto active" href="">
              <Link to="#header" activeStyle={{ color: 'red' }}>Home</Link>
              </a></li>
            <li><a className="nav-link scrollto" href="">
              <Link to='#AboutUs' smooth activeClassName="selected" activeStyle={{ color: 'red' }}>About</Link>
              </a></li>
            {/* <li><a className="nav-link scrollto" href="#header">Devcation`24</a></li> */}
            <li><a className="nav-link scrollto" href="#features">Timeline</a></li>
            <li><a className="nav-link scrollto" href="#pricing">Events</a></li>
            <li className="nav-link dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <a className="dropdown-toggle" href="" role="button" >
                More
              </a>
              <ul className={`dropdown-menu ${dropdownMenuOpen ? 'dropdown-menu-show' : 'menu-hide'}`} style={{ visibility: dropdownMenuOpen ? 'visible' : 'hidden' }}>
                <li><a className="dropdown-item" href="#Tracks"><Link to='#tracks' smooth>Tracks</Link></a></li>
                <li><a className="dropdown-item" href="#Prizes"><Link to='#prizes' smooth>Prizes</Link></a></li>
                <li><a className="dropdown-item" href="#team">Team</a></li>
                <li><a className="dropdown-item" href="#Sponsors"><Link to='#sponsors' smooth>Sponsors</Link></a></li>
              </ul>
            </li>
            <li><a className="nav-link scrollto" href="#footer">Contact</a></li>
          </ul>
          {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
        </nav>
        <div className="social-links"> 
        <a href="https://twitter.com/gdsc_igdtuw" target="_blank" className="twitter" style={{"marginLeft":"2px"}}> <Icon color="primary" component={XIcon} style={{"width":"25px", "color":"#1BB1DC"}} /> </a> 
        <a href="https://www.facebook.com/GDSCIGDTUW/" target="_blank" className="facebook"style={{"marginLeft":"2px"}}> <Icon color="primary" component={FacebookIcon} style={{"width":"26px", "color":"#1BB1DC"}}/> </a> 
        <a href="https://www.linkedin.com/company/dscigdtuw/mycompany/" target="_blank" className="linkedin" style={{"marginLeft":"2px"}}> <Icon color="primary" component={LinkedInIcon} style={{"width":"25px", "color":"#1BB1DC"}}/> </a> 
        <a href="https://www.instagram.com/gdsc_igdtuw" target="_blank" className="instagram" style={{"marginLeft":"2px"}}> <Icon color="primary" component={InstagramIcon} style={{"width":"25px", "color":"#1BB1DC"}}/> </a> 
        <a href="https://www.youtube.com/@DSCIGDTUW" target="_blank" className="instagram" style={{"marginLeft":"2px"}}> <Icon color="primary" component={YouTubeIcon} style={{"width":"30px", "color":"#1BB1DC"}}/> </a> 
        </div>
        <div className='NavHamToggel'>
           <Icon className="NavHam" component={dropdownNav ? CloseIcon : MenuIcon} style={{"color":"black"}} onClick={NavToggle}/>
        </div>
      </div>
    </header>
    </BrowserRouter>
  );
};

export default Nav;
