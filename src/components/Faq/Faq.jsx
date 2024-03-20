import { useState, useRef } from "react";
import PropTypes from "prop-types";
import "./Faq.css";

const faqs = [
    {
        id: 1,
        question: "What is an Ideathon, Designathon and Hackathon?",
        answer: `Devcation 2.0 is a festival where tech-enthusiasts come together for a week to learn, explore, share ideas and find innovative solutions to everyday problems! An Ideation is where you ideate and present your solution, a Designathon is where you design and present a user-interface for your solution and a hackathon is where you present a working prototype of your solution, all supported by workshops and mentors.`
    },
    {
        id: 2,
        question: "Who can contribute?",
        answer: `If you're a tech enthusiast, designer or just someone who has some creative solutions and product ideas, we'd love to have you at Devcation 2.0! Whether you’re undergrad or graduate, we believe you can get something out of the event.`
        
    },
    {
        id: 3,
        question: "Do I need past experience?",
        answer: `Devcation 2.0 is a festival where tech-enthusiasts come together for a week to learn, explore, share ideas and find innovative solutions to everyday problems! An Ideation is where you ideate and present your solution, a Designathon is where you design and present a user-interface for your solution and a hackathon is where you present a working prototype of your solution, all supported by workshops and mentors.`
        
    },
    {
        id: 4,
        question: "How much does it cost to participate in Devcation 2.0?",
        answer: `Nothing! It is absolutely free of cost.`
    },
    {
        id: 5,
        question: "How to participate in Devcation 2.0?",
        answer: `You can make sumissions to the Designathon and Hackathon in teams of 1-4. However, making a submission is not mandatory, you can be a part of this festival by attending working, netowking events, fun sessions and games!`
    },
    {
        id: 6,
        question: "My question was not answered here.",
        answer: `Kindly send us your queries on the contact form our discord server and tag the organizers.`
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
                    <p className='mb-0'>{answer}</p>
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
                <h1 className="text-black font-bold">Frequently Asked Questions</h1>
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                ))}
            </div>
        </div>
    );
};

export default FAQs;