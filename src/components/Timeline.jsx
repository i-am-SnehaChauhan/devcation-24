import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsFillCalendarFill } from "react-icons/bs";

const Prizes = () => {
  return (
    <div>
     <h1 className="text-black font-bold">Timeline</h1>
      <div
        className="prizes"
        style={{
          // backgroundImage: `url(${prizes_bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <VerticalTimeline lineColor="#000">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
             
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            date="March 21st, 2024"
            icon={<BsFillCalendarFill />}
          >
            <h2 className="font-bold">🎉Opening Ceremony & Registration🚀</h2>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p>
              <ul className="prizeList">
                <li className="text-left">Submission for all Mini Events and the Registration for the Hackathon Starts</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            date="March 27th, 2024"
            icon={<BsFillCalendarFill />}
          >
            <h2 className="font-bold">🔒 Hacking Period Starts! 🔓</h2>
            {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
            <p>
              <ul className="prizeList">
                <li className="text-left">Get ready to code, create, and innovate! </li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<BsFillCalendarFill />}
            date="March 30th, 2024"
          >
            <h2 className="font-bold">⏰ Submissions Close for mini events ⏰</h2>
            {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
            <p>
              <ul className="prizeList">
                <li className="text-left">The deadline for submissions for all mini events is approaching fast.</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<BsFillCalendarFill />}
            date="March 31st, 2024"
          >
            <h2 className="font-bold">⏰ Hacking Period Ends⏰</h2>
            {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
            <p>
              <ul className="prizeList">
                <li className="text-left">Make sure to wrap up your projects and prepare for submission.</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<BsFillCalendarFill />}
            date="April 5th, 2024"
          >
            <h2 className="font-bold">📅 Final pitching and closing ceremony. 📅</h2>
            {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
            <p>
              <ul className="prizeList">
                <li className="text-left">Don`t miss out on this memorable event!</li>
              </ul>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Prizes;