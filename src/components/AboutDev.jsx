const sponsorsInfoGold = [
    {
        image: "sponsors/rcigdtuw.jpg",
        link: "https://sites.google.com/view/rcigdtuw/home",
    }


];



const SponsorsCard = ({ link,image }) => {
    return (
        <div className="m-5 cursor-pointer max-w-sm rounded-md  overflow-hidden shadow-lg hover:shadow-xl  transition duration-300">
            <div className="p-3">
                <a href={link}><img src={image} alt="sponsors" className="w-2/4 mx-auto" /></a>
                {/* <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{prize}</p> */}
            </div>
        </div>
    );
};

const AboutDev = () => {
    return (
        <>
        <h1 id="sponsors" className="mt-20 font-bold mb-5" style={{color:'#2D2B46'}}>About Devcation'24</h1>
        <div className="flex flex-wrap">
            {/* {sponsorsInfoGold.map((link, index) => (
                <SponsorsCard key={index} {...link} />
            ))} */}
            <img src='header.png' alt="header" className="w-full  mb-5 md:w-1/3 md:pr-20 md:mb-0" />
            <p className=" w-full px-5 text-2xl md:text-xl mt-6 md:w-2/3 md:my-auto" >Devcation is a week-long technical festival organized by Google Developer Student Clubs - Indira Gandhi Delhi Technical University for Women that celebrates diversity in the TechForGood Domain. During the week, we have the Devcation'24 hackathon: Hack 'N' Solve.
<br></br>
The tech fiesta doesn't end here, we have four mini-events: Filter Fiesta, Gemini Genesis, Doodle Craft and TechScribe. These events are designed to spark your creativity, encourage innovative thinking, and help you craft tech solutions that stand out.

</p>
        </div>
 
        </>
    );
};

export default AboutDev;
