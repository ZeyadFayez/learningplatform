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
    <div
      style={{
        backgroundColor: "#DAD7CD",
        fontFamily: "Segoe UI, sans-serif",
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <Header />

      <div
        className="about-panel"
        style={{
          position: "absolute",
          top: 100,
          left: 0,
          width: "480px",
          height: "calc(100vh - 100px)",
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          color: "white",
          padding: "2rem",
          transform: showAbout ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.8s ease-in-out",
          zIndex: 5,
          borderTopRightRadius: "16px",
          borderBottomRightRadius: "16px",
          overflow: "hidden",
        }}
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
        <button
          style={{
            marginTop: "1.5rem",
            backgroundColor: "#344E41",
            color: "white",
            border: "none",
            padding: "0.6rem 1.2rem",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          About Us
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .faq-box {
          position: absolute;
          top: 200px;
          right: 20px;
          background-color: #344E41;
          color: white;
          padding: 1rem;
          width: 250px;
          border-radius: 6px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
          animation: fadeIn 0.5s ease-in-out;
        }

        .faq-box h4 {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .faq-box p {
          font-size: 0.9rem;
          margin-bottom: 10px;
        }

        .faq-toggle-button {
          display: block;
          margin: 10px auto 0 auto;
          background-color: #588157;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: background-color 0.3s ease;
        }

        .faq-toggle-button:hover {
          background-color: #344E41;
        }

        .upcoming-events {
          background-color: #3A5A40;
          padding: 2rem;
          border-radius: 50px;
          max-width: 800px;
          margin: 4rem auto 8rem auto;
          box-shadow: 0 5px 10px rgba(14, 3, 3, 0.05);
          border-top: 6px solid #3A5A40;
          animation: fadeIn 1.5s ease-in-out;
        }

        .upcoming-events h2 {
          font-size: 3rem;
          margin-bottom: 2rem;
          color: #dedbdb;
          text-align: center;
        }

        .events-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .event-card {
          background-color: #DAD7CD;
          padding: 1.2rem 1.5rem;
          border-left: 6px solid #588157;
          border-radius: 12px;
          transition: transform 0.2s ease;
        }

        .event-card:hover {
          transform: translateY(-10px);
        }

        .event-card h3 {
          margin: 0;
          font-size: 1.5rem;
          color: #333;
        }

        .event-card p {
          color: #762f2f;
          margin: 0.5rem 0 1rem;
        }

        .event-card button {
          background-color: #344E41;
          color: #fff;
          border: none;
          padding: 0.6rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.95rem;
          transition: background-color 0.3s ease;
        }

        .event-card button:hover {
          background-color: #588157;
        }

        .registration-form {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .registration-form input {
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
        }

        .registration-form button {
          background-color: #588157;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: background-color 0.3s ease;
        }

        .registration-form button:hover {
          background-color: #344E41;
        }
      `}</style>

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
