const sponsorsInfoGold = [
    {
        image: "sponsors/rcigdtuw.jpg",
        link: "https://sites.google.com/view/rcigdtuw/home",
    }


];

const sponsorsInfoSilver = [
    {
        image: "sponsors/polygon.png",
        link: "https://polygon.technology/",
    },
    {
        image: "sponsors/eth_india.png",
        link: "https://ethindia.co ",
    },
    {
        image: "sponsors/coding_ninja.jpg",
        link: "https://www.codingninjas.com/",
    }



];

const sponsorsInfoBronze = [
    {
        image: "sponsors/interview_buddy.png",
        link: "https://dev.interviewbuddy.in/",
    },
    {
        image: "sponsors/echo3d.png",
        link: "https://www.echo3d.com/",
    },
    {
        image: "sponsors/rosemedia.jpg",
        link: "https://rosenfeldmedia.com/",
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

const Sponsors = () => {
    return (
        <>
        <h1 id="sponsors" className="Rocher-heading" style={{color:'#2D2B46'}}>Sponsors</h1>
        <h2 className="mt-10 font-bold text-3xl" style={{color:'#2D2B46'}}>Gold </h2>
        <div className="flex flex-wrap justify-center">
            {sponsorsInfoGold.map((link, index) => (
                <SponsorsCard key={index} {...link} />
            ))}
        </div>
        <h2 className="mt-10 font-bold text-3xl" style={{color:'#2D2B46'}}>Silver </h2>
        <div className="flex flex-wrap justify-center">
            {sponsorsInfoSilver.map((link, index) => (
                <SponsorsCard key={index} {...link} />
            ))}
        </div>
        <h2 className="mt-10 font-bold text-3xl" style={{color:'#2D2B46'}}>Bronze </h2>
        <div className="flex flex-wrap justify-center">
            {sponsorsInfoBronze.map((link, index) => (
                <SponsorsCard key={index} {...link} />
            ))}
        </div>
 
        </>
    );
};

export default Sponsors;
