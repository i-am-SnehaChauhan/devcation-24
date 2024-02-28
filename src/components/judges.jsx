import React from "react";

const judgeDetails = {
    "judge1": {
        name: "Judge 1",
        image: "https://devcation-23.netlify.app/assets/img/judge1.png",
    },
    "judge2": {
        name: "Judge 2",
        image: "https://devcation-23.netlify.app/assets/img/judge2.png",
    },
    "judge3": {
        name: "Judge 3",
        image: "https://devcation-23.netlify.app/assets/img/judge3.png",
    },
    "judge4": {
        name: "Judge 4",
        image: "https://devcation-23.netlify.app/assets/img/judge4.png",
    }
}

const Judges = () => {
    return (
        <div className="text-center">
            <h1 className="m-10 font-bold " style={{color:'#2D2B46'}}>Judges</h1>
            <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
                {Object.keys(judgeDetails).map((judge) => (
                    <div className="relative" key={judge}>
                        <img className="w-full h-auto" src={judgeDetails[judge].image} alt={judgeDetails[judge].name} />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 text-white transition-opacity">
                            <h2 className="font-bold">{judgeDetails[judge].name}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Judges;
