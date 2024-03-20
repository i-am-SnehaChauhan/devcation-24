import "./Header.css"; // Import CSS file
import { Icon } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Header = () => {
  const Join = () => {
    window.location.href = "https://devcation-24.devfolio.co/overview";
  };
  return (
    // <div className="main-header"id="header">
    <div className="header-container" id="header">
      <div className="text-container">
        <h2 className="title textWelcome">Welcome to</h2>
        <h2 className="title textDev">Devcation`24</h2>
        <button className="button " onClick={Join}>
          <img  className="mr-2 w-8 h-8" src="favicon.png" alt="arrow" />
          Go to Projects</button>
          <div className="social-container"> 
        <a href="https://twitter.com/gdsc_igdtuw" target="_blank" className="twitter" style={{"marginLeft":"3px"}}> <Icon className="icon"color="primary" component={XIcon} style={{"width":"40px","height":"30px", "color":"#1BB1DC"}} /> </a> 
        <a href="https://www.facebook.com/GDSCIGDTUW/" target="_blank" className="facebook"style={{"marginLeft":"3px"}}> <Icon className="icon" color="primary" component={FacebookIcon} style={{"width":"30px", "height":"40px","color":"#1BB1DC"}}/> </a> 
        <a href="https://www.linkedin.com/company/dscigdtuw/mycompany/" target="_blank" className="linkedin" style={{"marginLeft":"3px"}}> <Icon color="primary"className="icon" component={LinkedInIcon} style={{"width":"30px", "height":"40px","color":"#1BB1DC"}}/> </a> 
        <a href="https://www.instagram.com/gdsc_igdtuw" target="_blank" className="instagram" style={{"marginLeft":"3px"}}> <Icon className="icon"color="primary" component={InstagramIcon} style={{"width":"30px", "height":"30px","color":"#1BB1DC"}}/> </a> 
        <a href="https://www.youtube.com/@DSCIGDTUW" target="_blank" className="instagram" style={{"marginLeft":"3px"}}> <Icon className="icon"color="primary" component={YouTubeIcon} style={{"width":"35px", "height":"30px","color":"#1BB1DC"}}/> </a> 
        </div>
      </div>

     


      <div className="image-container">
      
        <img src="header.png" alt="header" className="image"/>
       
     
      
      </div>
      

    </div>
    // </div>
   
    
  );
};

export default Header;


// const Header = () => {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '10px' }}>
//         <div style={{ width: '40%', textAlign: 'start' }}>
//           <h2 style={{ fontSize: '40px', lineHeight: '1.3' }}>Welcome to</h2>
//           <h2 style={{ fontSize: '40px', lineHeight: '1.3' }}>Devcation'24</h2>
//           <button style={{ width: '50%',marginTop:'25px' }}>Go to Projects</button>
//         </div>
//         <div style={{ width: '50%' }}>
//           <img src="header.png" alt="header" style={{ maxWidth: '70%', height: 'auto' }} />
//         </div>
//       </div>
//     );
//   };
