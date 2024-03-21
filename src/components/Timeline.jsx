import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsFillCalendarFill } from "react-icons/bs";

const Prizes = () => {
  return (
    <div className="mt-10 mb-10">
      <h1 className="Rocher-heading">Timeline</h1>
      <div
        className="prizes"
        style={{
          // backgroundImage: `url(${prizes_bg})`, // Uncomment this line if you want to use an image as background

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        
        <VerticalTimeline lineColor="#080e68" style={{   }}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            contentStyle={{ boxShadow: "0 4px 6px hsl(210, 50%, 50%)" }}
            iconStyle={{
              backgroundImage:
                "radial-gradient(circle at 9% 80.3%, rgba(55,60,245,1) 0%, rgba(234,161,15,0.90) 100.2%)",
            }}
            date="March 21st, 2024"
            icon={<BsFillCalendarFill />}
          >
            <h2 className="font-bold" style={{ color: '#080e68' }} >🎉Opening Ceremony & Registration🚀</h2>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <h6>
              <ul className="prizeList">
                <li className="text-left" style={{ color: '#404040' }}>
                  Submission for all Mini Events and the Registration for the
                  Hackathon Starts
                </li>
              </ul>
            </h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            contentStyle={{ boxShadow: "0 4px 6px hsl(210, 50%, 50%)" }}
            iconStyle={{ backgroundImage:
              "radial-gradient(circle at 9% 80.3%, rgba(55,60,245,1) 0%, rgba(234,161,15,0.90) 100.2%)", }}
            date="March 27th, 2024"
            icon={<BsFillCalendarFill />}
          >
            <h2 className="font-bold" style={{ color: '#080e68' }}>🔒 Hacking Period Starts! 🔓</h2>
            {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
            <h6>
              <ul className="prizeList">
                <li className="text-left" style={{ color: '#404040' }}>
                  Get ready to code, create, and innovate!{" "}
                </li>
              </ul>
            </h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            contentStyle={{ boxShadow: "0 4px 6px hsl(210, 50%, 50%)" }}
            iconStyle={{ backgroundImage:
              "radial-gradient(circle at 9% 80.3%, rgba(55,60,245,1) 0%, rgba(234,161,15,0.90) 100.2%)",}}
            icon={<BsFillCalendarFill />}
            date="March 30th, 2024"
          >
            <h2 className="font-bold" style={{ color: '#080e68' }}>
              ⏰ Submissions Close for mini events ⏰
            </h2>
            {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
            <h6>
              <ul className="prizeList">
                <li className="text-left" style={{ color: '#404040' }}>
                  The deadline for submissions for all mini events is
                  approaching fast.
                </li>
              </ul>
            </h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            contentStyle={{ boxShadow: "0 4px 6px hsl(210, 50%, 50%)" }}
            iconStyle={{backgroundImage:
              "radial-gradient(circle at 9% 80.3%, rgba(55,60,245,1) 0%, rgba(234,161,15,0.90) 100.2%)", }}
            icon={<BsFillCalendarFill />}
            date="March 31st, 2024"
          >
            <h2 className="font-bold" style={{ color: '#080e68' }}>⏰ Hacking Period Ends⏰</h2>
            {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
            <h6>
              <ul className="prizeList">
                <li className="text-left" style={{ color: '#404040' }}>
                  Make sure to wrap up your projects and prepare for submission.
                </li>
              </ul>
            </h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            contentStyle={{ boxShadow: "0 4px 6px hsl(210, 50%, 50%)" }}
            iconStyle={{ backgroundImage:
              "radial-gradient(circle at 9% 80.3%, rgba(55,60,245,1) 0%, rgba(234,161,15,0.90) 100.2%)", }}
            icon={<BsFillCalendarFill />}
            date="April 5th, 2024"
          >
            <h2 className="font-bold" style={{ color: '#080e68' }}>
              📅 Final pitching and closing ceremony. 📅
            </h2>
            {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
            <h6>
              <ul className="prizeList">
                <li className="text-left" style={{ color: '#404040' }}>
                  Don`t miss out on this memorable event!
                </li>
              </ul>
            </h6>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Prizes;
