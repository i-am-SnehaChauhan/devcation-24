import React from "react";

const sponsorsInfo = [
    {
        image: "devfolio.png",
        link: "Rs. 10,000 & Goodies from Sponsors!",
    },
    {
        image: "devfolio.png",
        link: "Rs. 10,000 & Goodies from Sponsors!",
    },
    {
        image: "devfolio.png",
        link: "Rs. 10,000 & Goodies from Sponsors!",
    },
    {
        image: "devfolio.png",
        link: "Rs. 10,000 & Goodies from Sponsors!",
    },
    {
        image: "devfolio.png",
        link: "Rs. 10,000 & Goodies from Sponsors!",
    },    {
        image: "devfolio.png",
        link: "Rs. 10,000 & Goodies from Sponsors!",
    }


];

const SponsorsCard = ({ link,image }) => {
    return (
        <div className="m-5 cursor-pointer max-w-sm rounded-md bg-gray-200 overflow-hidden shadow-lg hover:shadow-xl  transition duration-300">
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
        <h1 className="mt-20 font-bold">Sponsors</h1>
        <h2 className="mt-10 text-white-700 text-3xl">Title Sponsor</h2>
        <div className="flex flex-wrap justify-center">
            {sponsorsInfo.map((link, index) => (
                <SponsorsCard key={index} {...link} />
            ))}
        </div>
        <h2 className="mt-10 text-white-700 text-3xl">Platinum Sponsor</h2>
        <div className="flex flex-wrap justify-center">
            {sponsorsInfo.map((link, index) => (
                <SponsorsCard key={index} {...link} />
            ))}
        </div>
        <h2 className="mt-10 text-white-700 text-3xl">Gold Sponsor</h2>
        <div className="flex flex-wrap justify-center">
            {sponsorsInfo.map((link, index) => (
                <SponsorsCard key={index} {...link} />
            ))}
        </div>
        <h2 className="mt-10 text-white-700 text-3xl">Silver Sponsor</h2>
        <div className="flex flex-wrap justify-center">
            {sponsorsInfo.map((link, index) => (
                <SponsorsCard key={index} {...link} />
            ))}
        </div>
        </>
    );
};

export default Sponsors;
