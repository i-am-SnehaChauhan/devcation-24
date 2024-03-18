import { HiOutlineUserGroup } from "react-icons/hi";
import { PiBuildings, PiUser } from "react-icons/pi";
import AnimatedNumber from "animated-number-react";
import "./Statistics.css";


const Statistics = () => {
    return (
        <div className="statistics-container" >
              <div className="statistics-box">
                <PiUser className="user-icon" size={"36px"} />
                <br />
                <AnimatedNumber value={400} showPlus />
                <span className="stat-label">Students</span>
              </div>
              <div className="statistics-box">
                <PiBuildings className="pi-buildings-icon" size={"36px"} />
                <br />
                <AnimatedNumber value={10} showPlus />
                <span className="stat-label">Organizations</span>
              </div>
              <div className="statistics-box">
                <HiOutlineUserGroup className="mentor-icon" size={"36px"} />
                <br />
                <AnimatedNumber value={40} showPlus />
                <span className="stat-label">Mentors</span>
              </div>
        </div>
      );
}

export default Statistics;