import "./Statistics.css";


const Statistics = () => {
    return (
        // <div classNameName="statistics-container" >
        //       <div classNameName="statistics-box">
        //         <PiUser classNameName="user-icon" size={"36px"} />
        //         <br />
        //         <AnimatedNumber value={400} showPlus />
        //         <span classNameName="stat-label">Students</span>
        //       </div>
        //       <div classNameName="statistics-box">
        //         <PiBuildings classNameName="pi-buildings-icon" size={"36px"} />
        //         <br />
        //         <AnimatedNumber value={10} showPlus />
        //         <span classNameName="stat-label">Organizations</span>
        //       </div>
        //       <div classNameName="statistics-box">
        //         <HiOutlineUserGroup classNameName="mentor-icon" size={"36px"} />
        //         <br />
        //         <AnimatedNumber value={40} showPlus />
        //         <span classNameName="stat-label">Mentors</span>
        //       </div>
        // </div>
        <div id="call-to-action" className="call-to-action">
        <div className="container aos-init aos-animate" data-aos="zoom-out">
          <div className="row">
            <div className="text-center text-lg-start">
              <h3 className="cta-title text-center">Insights from Devcation`23</h3>
               {/* <p classNameName="cta-text"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.</p>  */}

                <div className="row counters aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

                  <div className="col-lg-3 col-6 text-center">
                    <span>4.6/5</span>
                    <p>Hacker rating</p>
                  </div>

                  <div className="col-lg-3 col-6 text-center">
                    <span data-purecounter-start="0" data-purecounter-end="30" data-purecounter-duration="0" className="purecounter">300</span>
                    <p>Hacks</p>
                  </div>

                  <div className="col-lg-3 col-6 text-center">
                    <span data-purecounter-start="0" data-purecounter-end="25" data-purecounter-duration="0" className="purecounter">25</span>
                    <p>Speakers and mentors</p>
                  </div>

                  <div className="col-lg-3 col-6 text-center">
                    <span data-purecounter-start="0" data-purecounter-end="500" data-purecounter-duration="0" className="purecounter">500</span>
                    <p>Hackers</p>
                  </div>

                </div>

              </div>
            </div>
            {/* <!-- <div className="col-lg-3 cta-btn-container text-center">
              <a className="cta-btn align-middle" href="#">Call To Action</a>
            </div> --> */}
          </div>

        </div>
      );
}

export default Statistics;