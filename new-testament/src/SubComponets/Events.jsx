import React, { useEffect, useState } from "react";
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [nationalEvents, setNationalEvents] = useState([]);
  const [regionalEvents, setRegionalEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [eventSearchTerm, setEventSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Set initial visibility after a short delay to trigger animation
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    fetch("/national_events.json")
      .then(res => res.json())
      .then(data => setNationalEvents(data));

    fetch("/regional_events.json")
      .then(res => res.json())
      .then(data => setRegionalEvents(data));

    fetch("/all_events.json")
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        setFilteredEvents(data);
      });
  }, []);

  const handleEventSearch = (e) => {
    const val = e.target.value;
    setEventSearchTerm(val);

    if (val.length > 0) {
      const filteredSuggestions = events.filter(ev =>
        ev.title.toLowerCase().includes(val.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (eventTitle) => {
    setIsTransitioning(true);
    const selectedEvent = events.find(ev => ev.title === eventTitle);
    
    setTimeout(() => {
      setFilteredEvents([selectedEvent]);
      setEventSearchTerm(eventTitle);
      setSuggestions([]);
      setIsTransitioning(false);
    }, 300);
  };

  const handleFilter = (category) => {
    setIsTransitioning(true);
    setEventSearchTerm("");
    setSuggestions([]);
    
    setTimeout(() => {
      setActiveTab(category);
      if (category === "All") {
        setFilteredEvents(events);
      } else if (category === "National") {
        setFilteredEvents(nationalEvents);
      } else if (category === "Regional") {
        setFilteredEvents(regionalEvents);
      }
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className={`events-container ${isVisible ? 'visible' : ''}`}>
      <div className="events-header">
        <h2 className="events-heading">
          <span className="heading-icon">
            <i className="bi bi-calendar-event-fill"></i>
          </span>
          <span className="heading-text">Church Events</span>
        </h2>
        <div className="heading-line"></div>
        <p className="events-subtitle">
          Stay connected with our upcoming events and gatherings
        </p>
      </div>

      <div className="events-nav-wrapper">
        <div className="events-nav">
          {["All", "National", "Regional"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleFilter(tab)}
              className={`nav-button ${activeTab === tab ? 'active' : ''}`}
            >
              <i className={`bi ${
                tab === "All" ? "bi-grid-fill" :
                tab === "National" ? "bi-flag-fill" :
                "bi-geo-alt-fill"
              }`}></i>
              <span>{tab}</span>
            </button>
          ))}
        </div>

        <div className="search-wrapper">
          <div className="search-input">
            <i className="bi bi-search"></i>
            <input
              type="text"
              placeholder="Search events..."
              value={eventSearchTerm}
              onChange={handleEventSearch}
            />
          </div>
          
          {suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((event, index) => (
                <li 
                  key={index}
                  onClick={() => handleSuggestionClick(event.title)}
                >
                  <i className="bi bi-calendar-event"></i>
                  {event.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className={`events-grid ${isTransitioning ? 'transitioning' : ''}`}>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div 
              className="event-card" 
              key={index}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
              }}
            >
              <div className="event-image">
                <img src={event.image} alt={event.title} />
                <div className="event-type">
                  <i className={`bi ${event.type === "National" ? "bi-flag-fill" : "bi-geo-alt-fill"}`}></i>
                  {event.type}
                </div>
              </div>
              <div className="event-content">
                <h3>{event.title}</h3>
                <div className="event-date">
                  <i className="bi bi-calendar3"></i>
                  {new Date(event.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <p>{event.description}</p>
                <button className="event-details">
                  Learn More
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-events">
            <i className="bi bi-calendar-x"></i>
            <h3>No Events Found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
