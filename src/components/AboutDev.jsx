const AboutDev = () => {
  return (
    <>
      <h1 id="aboutdev" className="Rocher-heading mb-4" style={{ color: "#2D2B46" }}>
        About Devcation`24
      </h1>
      <div className="flex mb-4 md:flex-row flex-col  justify-center">
      
      <img
            src="header.png"
            alt="header"
            className=" mb-5 md:mb-0 md:w-1/3 md:pr-20 md:mb-0"
          
          />

     <div  className='md:translate-y-1/4'>
      <div
            className="border-[#080e68] border-4 text-white   xl:mt-0  md:w-fit h-fit md:ml-0  md:transform-none md:justify-center md:items-center"
            
        >
          <div className="flex bg-[#080e68] w-auto h-8 m-2 justify-end items-center text-[#F4E1B9]">
            <div className="border-2 border-[#f1debc] w-6 h-6 mr-1 text-center text-bold">
              ?
            </div>
          </div>
          
          <h6 className=" text-black w-full px-5 pb-5 text-2xl md:text-xl mt-6 md:w-3/3 md:my-auto">
            Devcation is a week-long technical festival organized by Google
            Developer Student Clubs - Indira Gandhi Delhi Technical University
            for Women that celebrates diversity in the TechForGood Domain.
            During the week, we have the Devcation`24 hackathon: Hack 'N' Solve.
            The tech fiesta doesn`t end here, we have four mini-events: Filter
            Fiesta, Gemini Genesis, Doodle Craft and TechScribe. These events
            are designed to spark your creativity, encourage innovative
            thinking, and help you craft tech solutions that stand out.
          </h6>
        </div>
        </div>
      </div>
    </>
  );
};

export default AboutDev;
