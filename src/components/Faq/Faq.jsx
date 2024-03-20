import { useState, useRef } from "react";
import PropTypes from "prop-types";
import "./Faq.css";

const faqs = [
    
    {
        id: 1,
        question: "Who can contribute?",
        answer: `Devcation is open to anyone with an interest in technology, innovation, and problem-solving. Participants can include students, developers, designers, entrepreneurs, and professionals from various backgrounds.`
        
    },
    {
        id: 2,
        question: "Where can we reach out in case of queries?",
        answer: `You can reach out to us on our Discord Server with any queries. Kindly use the doubt channel for the same!`
        
    },
    {
        id: 3,
        question: "Do I need to have coding experience to participate?",
        answer: `While coding experience is beneficial, it's not always necessary to participate in a hackathon. Many hackathons welcome participants with diverse skill sets, including design, business development, marketing, and project management. If you're a beginner you can also look at our mini events`
    },
    {
        id: 4,
        question: "What happens after the hackathon ends?",
        answer: `After the hackathon concludes, top 7 teams will be invited to present their projects to judges and fellow participants during the final pitching round at IGDTUW.

        Winners will be announced, and prizes awarded based on the judging criteria. Tentative Date for this is 5th April, 2024.`
    },
    {
        id: 5,
        question: "How can I stay updated on hackathon announcements and events?",
        answer: `Stay informed about Devcation 24 by joining our Discord Server. Know more about upcoming hackathons and events by GDSC IGDTUW by joining our GDSC Chapter.`
    }
]
 

const AccordionItem = ({ handleToggle, active, faq }) => {
    const { question, id, answer } = faq;
    const contentEl = useRef(null);

    return (
        

        <div className="rc-accordion-card">
            <div className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
                <h2 className="rc-accordion-title">{question}</h2>
                <i className="fa fa-chevron-down rc-accordion-icon"></i>
            </div>
            <div ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`} style={
                active === id
                    ? { height: contentEl.current?.scrollHeight }
                    : { height: "0px" }
            }>
                <div className="rc-accordion-body">
                    <p className='mb-0 '>{answer}</p>
                </div>
            </div>
        </div>
    )
};

AccordionItem.propTypes = {
    handleToggle: PropTypes.func.isRequired,
    active: PropTypes.number,
    faq: PropTypes.shape({
        id: PropTypes.number.isRequired,
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired
    }).isRequired
};

const FAQs = () => {
    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        setActive((prevActive) => (prevActive === index ? null : index));
    }

    return (
        <div className="container">
            <div className="question-container">
                <h1 className="Rocher-heading">Frequently Asked Questions</h1>
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                ))}
            </div>
        </div>
    );
};

export default FAQs;