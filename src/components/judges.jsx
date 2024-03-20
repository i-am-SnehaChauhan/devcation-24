import React from 'react';

const judgeDetails = {
    "judge1": {
        name: "To be revealed soon",
    },
    "judge2": {
        name: "To be revealed soon",
    },
}

const Judges = () => {
    return (
        <div className="text-center">
            <h1 className="Rocher-heading"style={{color:'#2D2B46'}}>Judges</h1>
            <div className=" flex justify-center mt-5">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                {Object.keys(judgeDetails).map((judge) => (
                    <div className="relative" key={judge}>
                        {/* <img className="w-full h-auto" src={judgeDetails[judge].image} alt={judgeDetails[judge].name} /> */}
                        <div className="w-80 h-80 flex px-10 italic py-10 text-[2rem] rounded items-center justify-center bg-[#BFDBFE]">
                            <h2 className="font-bold">To be revealed soon</h2>
                        </div>
                        <div className="w-80 h-80 flex shadow-md hover:shadow-lg  px-10 py-10 text-[2rem] rounded items-center justify-center absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100  bg-opacity-50 text-black transition-opacity"  style={{backgroundColor: "#D9D9F2"}}>
                            <h2 className="font-bold">{judgeDetails[judge].name}</h2>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}

export default Judges;
