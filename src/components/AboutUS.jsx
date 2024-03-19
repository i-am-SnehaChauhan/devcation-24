import aboutGdsc from "../../public/about.jpg";

const AboutUS = () => {
  const Join = () => {};

  return (
    <div id="AboutUs" className="flex flex-col md:flex-row lg:flex-row items-start justify-center bg-[#fff]  bg-cover overflow-hidden text-black relative">
      <div className="flex-1 mx-0 md:mx-0 my-14 py-10 px-3 md:px-16 max-w-7xl bg-opacity-70 bg-[#c9c9ec] backdrop-blur-md rounded-lg  md:my-14">
        <div className="grid md:grid-cols-2 gap-4 items-start">
          <div>
            <h1 className="text-2xl md:text-5xl font-bold mb-2">
              About GDSC IGDTUW
            </h1>
            <h2 className="text-lg md:text-xl font-bold mb-4">
              GDSC IGDTUW is an all woman’s student community of aspiring
              software developers
            </h2>
            <p className="text-md md:text-base mb-6">
              Here at GDSC IGDTUW, we explore technology and use it to build
              products that brings about positive change in society. We conduct
              mentorship sessions, workshops, knowledge transfer sessions,
              hackathons, coding contests, open source programs, etc. where
              students from across the globe get to showcase their knowledge and
              develop their skillset. 
            </p>
            <p className="text-sm md:text-base mb-6">              
              We have helped more than 7000+ university
              students to expand their technical knowledge and skills.
            </p>
            <button
              className="bg-primary-blue text-black rounded-full mt-10"
              onClick={Join}
            >
              Know More
            </button>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <img
              src={aboutGdsc}
              alt="team"
              className="rounded-lg"
              style={{ width: 500, height: 500 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
