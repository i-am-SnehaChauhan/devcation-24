import "./Header.css"; // Import CSS file

const Header = () => {
  const Join = () => {
    window.location.href = "https://devcation-24.devfolio.co/overview";
  };
  return (
    <div className="main-header">
    <div className="header-container" id="header">
      <div className="text-container">
        <h2 className="title textWelcome">Welcome to</h2>
        <h2 className="title textDev">Devcation`24</h2>
        <button className="button" onClick={Join}>Go to Projects</button>
      </div>
      <div className="image-container">
        <img src="header.png" alt="header" className="image" />
      </div>

    </div>
    </div>
   
    
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
