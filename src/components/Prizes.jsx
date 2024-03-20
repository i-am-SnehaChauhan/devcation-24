import React from "react";

const prizeInfo = [
    {
        title: "First Prize: $90",
        prize: "First Position Holder at Devcation'24 wins Rs 7500 with goodies!",
    },
    {
        title: "Second Prize: $42",
        prize: "Second Position Holder at Devcation'24 wins Rs 3500 along with goodies!",
    },
    {
        title: "Third Prize: $18",
        prize: "Third Position Holder at Devcation'24 wins Rs 1500!",
    },
    {
        title: "Sustainable Development Prize: $30",
        prize: "Additional 2500 Rs for winning project developed under the sustainability track.",
    },
];

const PrizeCard = ({ title, prize, image }) => {
    return (
        <div className="m-10 cursor-pointer max-w-sm rounded-md bg-gradient-to-br from-blue-900 to-blue-500 overflow-hidden shadow-lg hover:shadow-xl hover:shadow-blue-200 transition duration-300">
    <div className="p-6">
        <img src="./Tracks&prizes/prize.png" alt="Prize" className="w-1/5 h-1/5 mx-auto" />
        <div className="font-bold text-xl mb-2 text-white">{title}</div>
        <p className="text-gray-700 text-base text-white">{prize}</p>
    </div>
</div>

    );
};

const Prizes = () => {
    return (
        <>
        <h1 id="prizes" className="Rocher-heading" style={{color:'#2D2B46'}}>Prizes</h1>
        <div className="flex flex-wrap justify-center">
            {prizeInfo.map((prize, index) => (
                <PrizeCard key={index} {...prize} />
            ))}
        </div>
        </>
    );
};

export default Prizes;
