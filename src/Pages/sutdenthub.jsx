import React, { useState, useEffect } from "react";
import Header from "../Component/header";
import Footer from "../Component/footer";

const StudentHub = () => {
  const [faqVisibleLines, setFaqVisibleLines] = useState(0);
  const [isFaqVisible, setIsFaqVisible] = useState(true);
  const [registrationForms, setRegistrationForms] = useState({});
  const [formData, setFormData] = useState({});
  const [showAbout, setShowAbout] = useState(false);

  const faqLines = [
    {
      question: "What does this activity encourage?",
      answer:
        "It encourages students to interact with each other easily to ensure a great student life.",
    },
    {
      question: "How do I register for events?",
      answer: "You can click on the 'Register' button on the event card.",
    },
    {
      question: "Is there any cost involved?",
      answer:
        "Most of our events are free, but some might have a small fee to cover costs. Please check the event details for more information.",
    },
  ];

  useEffect(() => {
    if (isFaqVisible) {
      const interval = setInterval(() => {
        setFaqVisibleLines((prev) => {
          if (prev < faqLines.length) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 500);
      return () => clearInterval(interval);
    } else {
      setFaqVisibleLines(0);
    }
  }, [isFaqVisible]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAbout(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const toggleFaqVisibility = () => {
    setIsFaqVisible((prev) => !prev);
  };

  const toggleRegistrationForm = (eventId) => {
    setRegistrationForms((prev) => ({
      ...prev,
      [eventId]: !prev[eventId],
    }));
  };

  const handleInputChange = (eventId, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [eventId]: {
        ...prev[eventId],
        [field]: value,
      },
    }));
  };

  const handleFormSubmit = (eventId) => {
    const data = formData[eventId];
    if (data?.name && data?.email) {
      alert(
        `Registration successful for Event ID: ${eventId}\nName: ${data.name}\nEmail: ${data.email}`
      );
      setRegistrationForms((prev) => ({
        ...prev,
        [eventId]: false,
      }));
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="student-hub">
      <Header />

      {/* About Section */}
      <div
        className={`about-panel ${showAbout ? "show" : ""}`}
      >
        <h2>About Us</h2>
        <p>
          Welcome to the Student Hub — your ultimate destination for all student events,
          collaboration, and social engagement!
        </p>
        <p>
          We believe that life at university should go beyond books. Our mission is to help
          you explore interests, meet new people, and create unforgettable memories.
        </p>
        <p>
          From fun trivia nights and sports events to real-life meetups and workshops,
          we’ve got something for everyone.
        </p>
        <p>
          This space is built by students, for students — and we’re just getting started.
          Stay tuned for more exciting events and updates!
        </p>
        <button className="about-button">About Us</button>
      </div>

      {/* FAQ Section */}
      {isFaqVisible && (
        <div className="faq-box">
          <h4>FAQ</h4>
          {faqLines.slice(0, faqVisibleLines).map((line, index) => (
            <p key={index}>
              <strong>{line.question}</strong>
              <br />
              {line.answer}
            </p>
          ))}
          <button className="faq-toggle-button" onClick={toggleFaqVisibility}>
            {isFaqVisible ? "Hide FAQ" : "Show FAQ"}
          </button>
        </div>
      )}

      {!isFaqVisible && (
        <button
          className="faq-toggle-button"
          style={{ position: "absolute", top: "200px", right: "20px" }}
          onClick={toggleFaqVisibility}
        >
          Show FAQ
        </button>
      )}

      {/* Upcoming Events Section */}
      <section className="upcoming-events">
        <h2>📅 Upcoming Events</h2>
        <div className="events-list">
          {[
            {
              id: "form1",
              title: "🔴 Real life Meetings: Activities with new people",
              date: "April 15, 2025",
              time: "6:00 PM",
            },
            {
              id: "form2",
              title: "🎤 Event Night: General Tech Trivia",
              date: "April 18, 2025",
              time: "8:00 PM",
            },
            {
              id: "form3",
              title: "⚽ Sports and More",
              date: "April 20, 2025",
              time: "5:00 PM",
            },
          ].map((event) => (
            <div key={event.id} className="event-card">
              <h3>{event.title}</h3>
              <p>
                Date: {event.date} | Time: {event.time}
              </p>
              <button onClick={() => toggleRegistrationForm(event.id)}>
                Register
              </button>
              {registrationForms[event.id] && (
                <div className="registration-form">
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData[event.id]?.name || ""}
                    onChange={(e) =>
                      handleInputChange(event.id, "name", e.target.value)
                    }
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData[event.id]?.email || ""}
                    onChange={(e) =>
                      handleInputChange(event.id, "email", e.target.value)
                    }
                  />
                  <button onClick={() => handleFormSubmit(event.id)}>
                    Submit
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentHub;
