import Card from "./Card";
import "./Event.css";
import about from "/about.jpg";



const Event = () => 
{
    return(
        <>
        <h1 className="skill-head">Mini Events DEVCATION 24</h1>
        <p className="skill-para"> Explore the world of open-source projects and contribute to building innovative solutions. Elevate your skills while leaving a lasting impact on the world of technology.</p>
        <div className="project-container">
        <Card image={about} head="FILTER FIESTA" content="Share your innovative submissions and join us for a fun-filled celebration of digital creativity. The theme is back to the past!" link="/projects/webD" event="FILTER FIESTA: Get ready to unleash your creativity and immerse yourself in the world of AR-VR filters! "/>
        <Card image={about} head="AR/VR" content="Explore the world of augmented and virtual reality, and contribute to building immersive experiences. Elevate your skills while leaving a lasting impact on the world of AR/VR technology." link="/projects/arvr"/>
        <Card image={about} head="App Development" content="App development projects. Immerse yourself in a rich tech stack, and contribute to building innovative mobile applications. Elevate your skills while leaving a lasting impact on the world of mobile technology." link="/projects/appD"/>
        </div>
        <div className="project-container">
        <Card image={about} head="DSA" content="Delve into open-source projects focused on data structures and algorithms. Collaborate with like-minded developers to optimize algorithms, enhance efficiency, and contribute to foundational
           coding paradigms." link="/projects/dsa"/>
        </div>
        </>
    )
}
export default Event;

