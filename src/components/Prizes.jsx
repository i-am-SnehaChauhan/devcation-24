import React from "react";

const prizeInfo = [
    {
        title: "Hack & Solve Track Winner",
        prize: "Rs. 10,000 & Goodies from Sponsors!",
    },
    {
        title: "Hack & Solve Track Runner-Up",
        prize: "Rs. 7,000 & Goodies from Sponsors!",
    },
    {
        title: "Design & Solve Track Winner",
        prize: "Rs. 5,000 & Goodies from Sponsors!",
    },
    {
        title: "Design & Solve Track Runner-Up",
        prize: "Rs. 3,000 & Goodies from Sponsors!",
    },
    {
        title: "Mini Event Winners",
        prize: "5k worth of Vouchers & Goodies from Sponsors!",
    },
    {
        title: "All participants",
        prize: "Vouchers, Goodies, Prizes and Perks from Sponsors to all participants!",
    }
];

const PrizeCard = ({ title, prize, image }) => {
    return (
        <div className="m-10 cursor-pointer max-w-sm rounded-md bg-blue-100 overflow-hidden shadow-lg hover:shadow-xl hover:shadow-blue-200 transition duration-300">
            <div className="p-6">
                <img src="prize.png" alt="Prize" className="w-1/5 h-1/5 mx-auto" />
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{prize}</p>
            </div>
        </div>
    );
};

const Prizes = () => {
    return (
        <>
        <h1 className="mt-20 font-bold">Prizes</h1>
        <div className="flex flex-wrap justify-center">
            {prizeInfo.map((prize, index) => (
                <PrizeCard key={index} {...prize} />
            ))}
        </div>
        </>
    );
};

export default Prizes;
