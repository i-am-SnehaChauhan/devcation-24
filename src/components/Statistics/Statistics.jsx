import "./Statistics.css";


const Statistics = () => {
    return (
        <div id="call-to-action" className="call-to-action">
        <div className="container aos-init aos-animate" data-aos="zoom-out">
          <div className="row">
            <div className="text-center text-lg-start">
                <div className="row counters aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

                  <div className="flex col-lg-3 col-6 text-center ">
                   <span>4.6/5+</span>
                    <h4>Hacker rating</h4>
                  </div>

                  <div className="flex col-lg-3 col-6 text-center">
                    <span data-purecounter-start="0" data-purecounter-end="30" data-purecounter-duration="0" className="purecounter">300+</span>
                    <h4>Hacks</h4>
                  </div>

                  <div className="flex col-lg-3 col-6 text-center">
                    <span data-purecounter-start="0" data-purecounter-end="25" data-purecounter-duration="0" className="purecounter">25+</span>
                    <h4>Speakers and mentors</h4>
                  </div>

                  <div className="flex col-lg-3 col-6 text-center">
                    <span data-purecounter-start="0" data-purecounter-end="500" data-purecounter-duration="0" className="purecounter">500+</span>
                    <h4>Hackers</h4>
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