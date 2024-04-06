import { FaLinkedin } from "react-icons/fa";

const judgeDetails = {
  judge1: {
    image: "/judges/tushar.jpg",
    name: "Virendra Sharma",
    linkedin: "https://www.linkedin.com/in/virendra-sharma-214bb533/",
  },
  judge2: {
    image: "/judges/virendra.png",
    name: "Tushar Gupta",
    linkedin: "https://www.linkedin.com/in/tusharguptag/",
  },
  judge3: {
    image: "judges/piyush.jpg",
    name: "Piyush Khurana",
    linkedin: "https://www.linkedin.com/in/piyush-khurana-dev",
  }
};

const Judges = () => {
  return (
    <div className="text-center mt-10 mv-10">
      <h1 className="Rocher-heading" style={{ color: "#2D2B46" }}>
        Judges
      </h1>
      <div className=" flex justify-center mt-5">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          {Object.keys(judgeDetails).map((judge) => (
            <div className="relative" key={judge}>
              <img
                className="w-80 h-70 object-cover p-2"
                src={judgeDetails[judge].image}
                alt={judgeDetails[judge].name}
              />
              {/* <div className="w-80 h-80 flex px-10 italic py-10 text-[2rem] rounded items-center justify-center bg-[#BFDBFE]">
                       <h2 className="font-bold">{judgeDetails[judge].name}</h2>
                   </div> */}
              <div
                className="w-80 h-50 flex shadow-md px-1 py-1 text-[2.1rem] rounded absolute inset-0 items-center justify-center"
                style={{
                  backgroundColor: "#BFDBFE",
                  height: "15%",
                  top: "85%",
                }}
              >
                <a href={judgeDetails[judge].linkedin} className="mr-5 mb-2">
                  <FaLinkedin className="text-blue-600 text-4xl" />
                </a>
                <h2 className="font-bold ">{judgeDetails[judge].name}</h2>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Judges;
