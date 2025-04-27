import React, { useEffect, useState, useRef } from "react";
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [nationalEvents, setNationalEvents] = useState([]);
  const [regionalEvents, setRegionalEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [eventSearchTerm, setEventSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [noEventsMessage, setNoEventsMessage] = useState(""); 

  const localRef = useRef();
  const regionalRef = useRef();

  useEffect(() => {
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
        setFilteredEvents(data); // Default view
      });
  }, []);

  // Handle search term and filter events
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

  // Handle clicking a suggestion
  const handleSuggestionClick = (eventTitle) => {
    const selectedEvent = events.find(ev => ev.title === eventTitle);
    setFilteredEvents([selectedEvent]);
    setEventSearchTerm(eventTitle); // Show the selected event title in the search input
    setSuggestions([]); // Hide suggestions after selection
  };

  const handleFilter = (category) => {
    setActiveTab(category);
    if (category === "All") {
      setFilteredEvents(events);
    } else if (category === "National") {
      setFilteredEvents(nationalEvents);
    } else if (category === "Regionals") {
      setFilteredEvents(regionalEvents);
    }
  };

  return (
    <div className="Events-container">
      <h1 className="Eventsheading">Church Events</h1>

      <div className="nav">
        <button onClick={() => handleFilter("All")} className={activeTab === "All" ? "active" : ""}>All</button>
        <button onClick={() => handleFilter("National")} className={activeTab === "National" ? "active" : ""}>National</button>
        <button onClick={() => handleFilter("Regionals")} className={activeTab === "Regionals" ? "active" : ""}>Regionals</button>
      </div>

      <div className="input">
        <input
          type="text"
          className="search"
          placeholder="Search events..."
          value={eventSearchTerm}
          onChange={handleEventSearch}
        />
      </div>

      {/* Suggestions list */}
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((event, index) => (
            <li 
              key={index} 
              className="suggestion-item"
              onClick={() => handleSuggestionClick(event.title)}
            >
              {event.title}
            </li>
          ))}
        </ul>
      )}

      {/* Display No Events Message */}
      {noEventsMessage && <p className="no-events-message">{noEventsMessage}</p>}

      <hr className="divider" />

      <div className="events">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div className="event-card" key={index}>
              <img src={event.image} alt={event.title} className="event-image" />
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.description}</p>
            </div>
          ))
        ) : (
          <p>No events found</p>
        )}
      </div>
    </div>
  );
};

export default Events;
